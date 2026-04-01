import { StaggerHeading } from "@/components/motion/StaggerHeading";

export function HeroSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-border/45">
      <div className="relative min-h-[620px] bg-[linear-gradient(135deg,#181616_0%,#221d1c_34%,#34261f_100%)] md:min-h-[700px]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,10,10,0.72)_8%,rgba(14,12,11,0.46)_38%,rgba(16,14,13,0.18)_68%),radial-gradient(circle_at_78%_26%,rgba(255,194,132,0.16),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_28%),linear-gradient(180deg,rgba(10,10,12,0.06)_0%,rgba(6,6,8,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,244,236,0.12),transparent_22%),radial-gradient(circle_at_78%_30%,rgba(255,194,132,0.14),transparent_24%),radial-gradient(circle_at_54%_68%,rgba(0,0,0,0.18),transparent_34%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.44),transparent_82%)]" />

        <div className="section-frame relative flex min-h-[620px] items-end px-5 pb-10 pt-30 md:min-h-[700px] md:px-8 md:pb-14 md:pt-32 lg:px-10">
          <div className="max-w-[36rem] space-y-5">
            <StaggerHeading
              as="h1"
              className="max-w-[12ch] text-balance text-[2.6rem] font-semibold tracking-tight text-white md:text-5xl lg:text-[3.9rem] lg:leading-[1]"
              text="This is where ideas become action."
            />

            <p className="max-w-[30rem] text-base leading-7 text-white/84 md:text-lg">
              Mahindra University&apos;s Entrepreneurship Cell for students who want to test ideas,
              work seriously, and start early.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
