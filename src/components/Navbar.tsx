import { ChevronDownIcon, SwatchIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { themes } from '@/lib/theme';
import useThemeStore from '@/stores/theme.store';

const Navbar: React.FC = () => {
  const themeStore = useThemeStore();

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div className="flex-none gap-3">
        <div title="Change theme" className="dropdown dropdown-end">
          <button type="button" tabIndex={0} className="btn gap-1 normal-case btn-ghost">
            <SwatchIcon className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6" />
            <span className="hidden md:inline">Theme</span>
            <ChevronDownIcon className="ml-1 hidden h-3 w-3 opacity-60 sm:inline-block" />
          </button>
          <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 w-52 overflow-y-auto shadow-2xl mt-16">
            <div className="grid grid-cols-1 gap-3 p-3">
              {themes.map((theme) => (
                <button
                  key={theme}
                  type="button"
                  data-set-theme={theme}
                  data-act-class="outline"
                  className={clsx(
                    'outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2',
                    themeStore.theme === theme && 'outline',
                  )}
                  onClick={() => themeStore.setTheme(theme)}
                >
                  <div
                    data-theme={theme}
                    className="bg-base-100 text-base-content w-full font-sans"
                  >
                    <div className="grid grid-cols-5 grid-rows-3">
                      <div className="col-span-5 row-span-3 row-start-1 flex justify-between gap-1 py-3 px-4">
                        <div className="flex-grow text-start text-sm font-bold">
                          {theme}
                        </div>
                        <div className="flex flex-shrink-0 flex-wrap gap-1">
                          <div className="bg-primary w-2 rounded" />
                          <div className="bg-secondary w-2 rounded" />
                          <div className="bg-accent w-2 rounded" />
                          <div className="bg-neutral w-2 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <Link to="/sign-in" className="btn btn-primary">sign in</Link>
      </div>
    </div>
  );
};

export default Navbar;
