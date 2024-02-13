import Image from "next/image";

type Props = {
  title?: string;
  description?: string;
  url: string;
};

export default function Playlist({ title, description, url }: Props) {
  return (
    <div className="relative rounded-lg bg-[#181818] p-4">
      <div>
        <div className="mb-4 rounded-[6px] overflow-hidden">
          <Image
            aria-hidden="false"
            src={url}
            alt=""
            className="mMx2LUixlnN_Fu45JpFB SKJSok3LfyedjZjujmFt yOKoknIYYzAE90pe7_SE Yn2Ei5QZn19gria6LjZj"
            width={200}
            height={300}
            priority
          />
        </div>
        <div className="font-bold pb-1 text-nowrap">{title}</div>
        <div className="text-sm text-[#b3b3b3]">{description}</div>
      </div>
    </div>
  );
}
