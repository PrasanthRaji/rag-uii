import call_made from '@/assets/call_made.svg';

const CustomCardComponent = ({ content, icon=call_made }) => {
  return (
    <div className="cursor-pointer flex grow gap-4 justify-center py-6 pr-6 pl-8 w-full border border-white border-solid backdrop-blur-lg bg-white bg-opacity-60 rounded-[38px] m-h-16">
      <div className="flex-1 text-2xl tracking-tight leading-9 text-stone-900">
        {content}
      </div>
      <div className="flex justify-center items-center self-start p-2 w-10 h-10 bg-black border border-solid border-white border-opacity-70 rounded-[100px]">
        <img loading="lazy" src={icon} className="w-6 aspect-square" />
      </div>
    </div>
  );
};

export default CustomCardComponent;
