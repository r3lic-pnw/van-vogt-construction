import VanVogtIcon from "./VanVogtIcon";

export default function Hero() {
  return (
    <header className="flex flex-col items-center justify-center py-8 text-[#111] dark:text-white">
      <span>
        <VanVogtIcon className="h-[20vh] w-auto" aria-hidden />
      </span>
      <hr className="w-2/3 border-[#b91b1f] border-t-2 my-8" />
      <h1 className="text-3xl text-center">Van Vogt Custom Construction</h1>
      <hr className="w-2/3 border-[#b91b1f] border-t-2 my-8" />
      <p className="text-lg md:text-xl uppercase tracking-widest text-center">
        <span>Quality</span>
        <span className="text-[#b91b1f] ">&nbsp;/&nbsp;</span>
        <span>Integrity</span>
        <span className="text-[#b91b1f] ">&nbsp;/&nbsp;</span>
        <span>Built to Last</span>
      </p>
    </header>
  );
}
