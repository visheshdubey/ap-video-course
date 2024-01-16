import { Icons } from "@/components/theme/icons";
import { TagsDropdown } from "@/components/widgets/PopoverMenu";

const SnackbarHeader = () => {
  return (
    <section className="flex z-50 bg-white h-12 sticky top-0 items-center gap-4 w-full shadow text-xl px-4 py-2 lg:justify-center lg:py-3.5 text-white">
      <div className="flex items-center justify-between w-full h-full max-w-screen-2xl">
        <div className="flex items-center justify-center pl-2 cursor-pointer laptop:pl-8">
          <div className="laptop:block svelte-eqd6zh">
            <img
              className="object-contain h-6"
              src="https://acharyaprashant.org/images/ic_videoseries.png"
              alt="content home"
            />
          </div>
          <div className="ml-6 hidden w-[36rem] flex-grow md:block">
            <div className="items-center border rounded shadow-sm">
              <div className="relative">
                <div className="relative flex w-full">
                  <TagsDropdown />
                  <input
                    type="text"
                    className="w-full p-2 text-base text-gray-400 outline-none h-9 caret-theme focus:ring-0 active:border-0"
                    placeholder="Search for video series"
                  />
                  <button
                    id="main-website-search-courses-btn"
                    className="items-end px-2 py-1 bg-orange-200 rounded-r fill-current text-slate-700"
                  >
                    <Icons.search />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="px-2 py-1 text-sm text-center transition-all duration-150 border-0 rounded-md bg-theme">
          Login
        </button>
      </div>
    </section>
  );
};

export default SnackbarHeader;
