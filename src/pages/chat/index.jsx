import CustomCardComponent from "@/components/custom/cardComponent";
import CustomTextArea from "@/components/custom/textArea";

const ChatPage = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full pb-10">
      <div className="flex flex-col items-center px-5  w-full h-full">
        <div className="mt-40 text-6xl">
          CHAT WITH YOUR <span className="text-fuchsia-500">WORK</span> DATA
        </div>
        <div className="flex gap-0.5 justify-center mt-8 text-sm leading-5">
          <div className="text-stone-900 text-opacity-70">
            Information Assistant uses AI. Check for mistakes.
          </div>
          <div className="flex flex-col text-black">
            <div>Transparency Note</div>
            <div className="shrink-0 h-0.5 bg-teal-500" />
          </div>
        </div>
        <div className="mt-16 max-w-full w-[1015px]">
          <div className="grid grid-cols-2 gap-5">
            <CustomCardComponent content="What is the most recent object to land on Mars?" />
            <CustomCardComponent content="What are Microsoft’s primary sources of revenue?" />
            <CustomCardComponent content="What are some flavors of Breyers?" />
            <CustomCardComponent content="What is global idea of democracy?" />
          </div>
        </div>
      </div>
      <CustomTextArea />
    </div>
  );
};

export default ChatPage;
