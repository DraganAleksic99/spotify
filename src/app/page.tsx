import MainSectionHeader from "./components/MainSectionHeader";
import Playlist from "./components/Playlist";
import ManinSectionFooter from "./components/MainSectionFooter";

export default function Home() {
  return (
    <div className="relative h-full overflow-y-hidden rounded-lg">
      <MainSectionHeader />
      <main className="home pt-[65px] bg-[#121212] max-h-full overflow-y-scroll">
        <div className="px-6">
          <section className="mt-6 mb-4">
            <div className="mb-6 text-2xl text-white font-bold">
              <h2>Browse all</h2>
            </div>
            <div className="grid grid-cols-5 gap-6 min-w-[372px]">
              {playlists.map((playlist) => (
                <Playlist
                  key={playlist.title}
                  url={playlist.url}
                  title={playlist.title}
                  description={playlist.description}
                />
              ))}
            </div>
          </section>
          <ManinSectionFooter />
        </div>
      </main>
    </div>
  );
}

const playlists = [
  {
    title: "Lofi Beats",
    description: "Chill beats, lofi vibes, new tracks every week...",
    url: "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
  },
  {
    title: `Today\'s Top Hits`,
    description: "Benson Boone is on top of the Hottest 50!",
    url: "https://i.scdn.co/image/ab67706f00000002af29338e415c87776e74a574",
  },
  {
    title: "Chillout Lounge",
    description: "Just lean back and enjoy relaxed beats.",
    url: "https://i.scdn.co/image/ab67706f00000002dec17246891b5b4eb97bdb0d",
  },
  {
    title: "All Out 2020s",
    description: "The biggest songs of the 2020s.",
    url: "https://i.scdn.co/image/ab67706f00000002d771dc645afe9b87978b1d3e",
  },
  {
    title: "Jazz in the Background",
    description: "Soft instrumental Jazz for all your activities.",
    url: "https://i.scdn.co/image/ab67706f00000002bdeb1c317ac2dd10f2397e4c",
  },
];
