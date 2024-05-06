import mop from "@/assets/mop.svg";
import send from "@/assets/send.svg";
import attach_file from "@/assets/attach_file.svg";

const CustomTextArea = () => {
  return (
    <div className="flex flex-col justify-center max-w-full border-teal-400 border-solid border-[3px] rounded-[100px] w-[1166px]">
      <div className="flex gap-2 p-2 bg-white rounded-[100px] border border-solid border-slate-200">
        <div className="flex flex-1 gap-5 text-lg tracking-normal leading-7 whitespace-nowrap text-stone-900 text-opacity-40">
          <div className="w-10 h-10 relative bg-black/[.05] rounded-full border border-white/opacity-75 flex justify-center item-center">
            <img loading="lazy" src={attach_file} className="p-2" />
          </div>
          <div className="flex-1 my-auto text-ellipsis ">
            Type your message here
          </div>
        </div>
        <div className="flex gap-4 justify-between pl-2.5">
          <img
            loading="lazy"
            src={mop}
            className="shrink-0 my-auto fill-zinc-900"
          />
          <div className="w-10 h-10 relative bg-black rounded-full border border-white/opacity-75 flex">
            <img loading="lazy" src={send} className="pl-1 w-6 h-6 m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTextArea;
