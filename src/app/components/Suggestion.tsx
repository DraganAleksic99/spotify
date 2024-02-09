type Props = {
  title: string;
  subtitle: string;
  buttonText: string;
};

export default function Suggestion({ title, subtitle, buttonText }: Props) {
  return (
    <div className="px-2 pb-2">
      <div className="my-2 px-5 py-4 bg-[#242424] rounded-lg flex flex-col gap-5">
        <div className="h-[50px]">
          <div className="flex flex-col gap-2">
            <span className="font-bold">{title}</span>
          </div>
          <div className="mt-1">
            <span className="text-sm">{subtitle}</span>
          </div>
        </div>
        <button className="rounded-full bg-white text-black min-h-0 w-fit">
          <span className="py-1 px-4 font-medium inline-block">
            {buttonText}
          </span>
        </button>
      </div>
    </div>
  );
}
