import { useState, useEffect } from 'react'
import './App.css'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Content from "./Content"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {

  const [ category, setCategory ] = useState('');
  const [ page, setPage ] = useState('');
  const [ navigation, setNavigation ] = useState([]);
  const [ hash, setHash ] = useState('');

  useEffect(() => {
    const hashChanged = () => {
        setHash(window.location.hash.replace(/^#/,''));
    }
    hashChanged();
    window.addEventListener('hashchange', hashChanged)
    return () => { window.removeEventListener('hashchange', hashChanged); };
  }, []);

  useEffect(() => {
    const paths = hash.split('/');
    setCategory(paths[1]);
    setPage(paths[2]);
  }, [hash]);

  useEffect(() => {
    setNavigation([
        { name: 'Home', href: '#/', current: !category },
        { name: 'Vectors', href: '#/vector', current: (category == 'vector') }
      ]);
  }, [category, page])

  return (
    <>
      <Disclosure as="header" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                  <div className="w-full sm:max-w-xs">
                    {/* <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-200 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                        placeholder="Search"
                        type="search"
                      />
                    </div> */}
                    Unreal Snippets
                  </div>
                </div>
                <div className="relative z-10 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
              <nav className="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            <DisclosurePanel as="nav" className="lg:hidden" aria-label="Global">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md py-2 px-3 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Content page={page} category={category} />
      </div>
    </>
  )
}

export default App
