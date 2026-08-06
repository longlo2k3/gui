import { useState } from "react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

type Page = {
  id: string;
  paragraphs: string[];
  closing?: string;
};

const PAGES: Page[] = [
  {
    id: "page-1",
    paragraphs: [
      "1h44p chưa tắm rửa hay làm gì cả, ngồi viết vớ vẩn nên đừng nói anh sến xúa nhé.",
      "Kể từ lần đầu tiên thấy em trong thang máy, anh có một cái gì đó với em rồi; nhưng cũng chỉ lóe lên thôi. Sau đó thì liên tiếp gặp em trong thang D, đứng đối diện có, sau lưng có thì ánh mắt anh đều hướng về em, chắc em cũng chẳng để ý.",
      "Những lần đi sau lưng thấy cầm hộp cơm, thật sự chỉ muốn lao đến cầm hộ nhưng ko dám vì làm gì đã có danh phận gì. Rồi cố gắng mò ra sđt gửi zl nhưng cũng chỉ dám gửi icon Hi. May mắn sau nhờ có sinh nhật a Phúc (tính ra a Phúc là thần hộ mệnh của anh) rồi quen được em.",
    ],
  },
  {
    id: "page-2",
    paragraphs: [
      "Những lần nhắn tin tự cười tự tưởng tượng; những lần hụt hẫng vì em bảo em chưa muốn yêu; lần đầu em gọi anh là những lần mà tâm trạng của anh như biểu đồ hình sin, nó buồn thì buồn não lòng, vui thì vui đến tận cùng.",
      "Và những ngày sau cứ thế thành thói quen gọi em mỗi tối. Rồi những lần tính toán khích tướng em để biết cảm xúc của em, rồi những lần mà thật sự muốn từ bỏ thì em lại líu anh lại, rồi lần em đồng ý làm người yêu anh.",
    ],
  },
  {
    id: "page-3",
    paragraphs: [
      "Từng khoảng khắc đều khiến nhớ, khắc, ghi nó vào tận trong tâm trí. Để đến bây giờ chúng mình yêu nhau đến tháng thứ 5, anh không dám chắc là anh đã thực sự khiến em hạnh phúc hay chưa, có khiến em hối hận hay không.",
      "Nhưng anh vẫn luôn cố thay đổi bản thân, không phải là để hài lòng em, mà để yêu em đúng cách hơn, để biết cách chăm sóc em hơn và để em hạnh phúc hơn. Em mãi mãi là một điều gì đó rất đặc biệt trong anh.",
    ],
    closing: "Yêu em rất nhiều.",
  },
];

function ChevronDoubleRight({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="13 17 18 12 13 7" />
      <polyline points="6 17 11 12 6 7" />
    </svg>
  );
}

function ChevronDoubleLeft({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="11 17 6 12 11 7" />
      <polyline points="18 17 13 12 18 7" />
    </svg>
  );
}

export function Hero() {
  const [pageIndex, setPageIndex] = useState(0);
  const page = PAGES[pageIndex];
  const isFirst = pageIndex === 0;
  const isLast = pageIndex === PAGES.length - 1;

  const next = () => {
    if (!isLast) setPageIndex((i) => i + 1);
  };
  const prev = () => {
    if (!isFirst) setPageIndex((i) => i - 1);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Hero content - split layout: h1 left (1/3), p right */}
      <div
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-start justify-start px-6 pb-24 pt-20 sm:pt-24 md:flex-row md:items-start md:px-10 md:pt-28"
        style={{ gap: "24px" }}
      >
        <h1
          className="animate-fade-rise text-shine text-balance text-4xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-5xl md:text-6xl md:w-[40%] md:text-left"
          style={{
            fontFamily: "'Instrument Serif', serif",
          }}
        >
          <em className="not-italic">
            Đêm không ngủ, ngồi viết đôi lời với em
          </em>
        </h1>

        <div className="md:flex-1 max-w-md md:max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          <div key={page.id} className="space-y-6">
            {page.paragraphs.map((text, i) => (
              <p key={`${page.id}-${i}`} className="animate-fade-rise">
                {text}
              </p>
            ))}

            {page.closing && (
              <p className="animate-fade-rise text-foreground/90 italic">
                {page.closing}
              </p>
            )}
          </div>

          {/* Page indicator + flip controls - bottom of content */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-foreground/80">
              <span className="font-semibold text-foreground">{String(pageIndex + 1).padStart(2, "0")}</span>
              <span className="h-px w-10 bg-foreground/60" />
              <span>{String(PAGES.length).padStart(2, "0")}</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Previous page button - secondary */}
              <button
                type="button"
                onClick={prev}
                disabled={isFirst}
                aria-label="Lật về trang trước"
                className="group flex h-11 items-center gap-2 rounded-full border border-foreground/20 bg-background/30 pl-2 pr-4 text-sm font-medium text-foreground/80 backdrop-blur-md transition-all hover:border-foreground/50 hover:bg-background/60 hover:text-foreground disabled:cursor-not-allowed disabled:border-foreground/10 disabled:text-foreground/25 disabled:hover:bg-background/30"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10 transition-colors group-hover:bg-foreground/20 group-disabled:bg-transparent">
                  <ChevronDoubleLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-disabled:opacity-40" />
                </span>
                <span>Quay lại</span>
              </button>

              {/* Next page button - primary action */}
              <button
                type="button"
                onClick={next}
                disabled={isLast}
                aria-label="Lật sang trang tiếp theo"
                className="group flex h-11 items-center gap-2 rounded-full border border-foreground/30 bg-background/40 pl-4 pr-2 text-sm font-medium text-foreground/90 backdrop-blur-md transition-all hover:border-foreground/70 hover:bg-background/70 hover:text-foreground disabled:cursor-not-allowed disabled:border-foreground/10 disabled:text-foreground/25 disabled:hover:bg-background/40"
              >
                <span>{isLast ? "Hết trang" : "Trang tiếp"}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10 transition-colors group-hover:bg-foreground/20 group-disabled:bg-transparent">
                  <ChevronDoubleRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-disabled:opacity-40" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}