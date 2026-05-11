import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 589;
const BASE_URL = 'https://unvrs-labs-2.piyushsingh123443.workers.dev/new-frames-webp/';

function getFrameUrl(index: number): string {
  const padded = String(index).padStart(6, '0');
  return `${BASE_URL}frame_${padded}.webp`;
}

export const BackgroundCanvas = ({ scrollContainer }: { scrollContainer: React.RefObject<HTMLElement | null> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const drawFrameRef = useRef<(frameIndex: number) => void>();

  // Draw function
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || !img.naturalWidth) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvas.width / canvas.height;
    
    let drawW: number, drawH: number, drawX: number, drawY: number;
    
    if (canvasRatio > imgRatio) {
      drawW = canvas.width;
      drawH = canvas.width / imgRatio;
      drawX = 0;
      drawY = (canvas.height - drawH) / 2;
    } else {
      drawH = canvas.height;
      drawW = canvas.height * imgRatio;
      drawX = (canvas.width - drawW) / 2;
      drawY = 0;
    }
    
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  };

  drawFrameRef.current = drawFrame;

  // Preload images — NO crossOrigin so external images load without CORS issues
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loaded = 0;

    // Load first frame immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(1);
    firstImg.onload = () => {
      if (!cancelled) {
        images[0] = firstImg;
        imagesRef.current = images;
        drawFrameRef.current?.(0);
      }
    };

    // Load remaining frames in parallel batches
    const BATCH_SIZE = 30;
    
    async function loadBatch(startIdx: number) {
      const promises: Promise<void>[] = [];
      for (let i = startIdx; i < Math.min(startIdx + BATCH_SIZE, TOTAL_FRAMES); i++) {
        if (cancelled) return;
        const promise = new Promise<void>((resolve) => {
          const img = new Image();
          img.src = getFrameUrl(i + 1);
          img.onload = () => {
            if (!cancelled) {
              images[i] = img;
              loaded++;
              if (loaded % 10 === 0 || loaded === TOTAL_FRAMES) {
                setLoadProgress(Math.floor((loaded / TOTAL_FRAMES) * 100));
              }
            }
            resolve();
          };
          img.onerror = () => {
            loaded++;
            resolve();
          };
        });
        promises.push(promise);
      }
      await Promise.all(promises);
    }

    async function loadAll() {
      for (let i = 0; i < TOTAL_FRAMES; i += BATCH_SIZE) {
        if (cancelled) return;
        await loadBatch(i);
      }
      if (!cancelled) {
        imagesRef.current = images;
        setLoadProgress(100);
      }
    }

    loadAll();

    return () => {
      cancelled = true;
    };
  }, []);

  // Scroll-linked animation
  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    function onScroll() {
      if (!container) return;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrollFraction = Math.max(0, Math.min(1, scrollTop / scrollHeight));
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(scrollFraction * (TOTAL_FRAMES - 1))
      );
      
      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrameRef.current?.(frameIndex));
      }
    }

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, [scrollContainer]);

  // Handle resize
  useEffect(() => {
    function onResize() {
      drawFrameRef.current?.(currentFrameRef.current);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full z-0"
        style={{ pointerEvents: 'none' }}
      />
      {/* Loading indicator */}
      {loadProgress < 100 && (
        <div className="fixed bottom-6 right-6 z-50 bg-bg-secondary/80 backdrop-blur-md border border-border rounded-lg px-4 py-2 flex items-center gap-3">
          <div className="w-32 h-1 bg-bg-primary rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent-cyan to-accent-violet rounded-full transition-all duration-300"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="text-text-secondary text-xs font-mono">{loadProgress}%</span>
        </div>
      )}
    </>
  );
};
