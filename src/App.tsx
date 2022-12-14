import type { Component } from 'solid-js';
import './questions/syllables.js'
// import styles from './App.module.css';

const App: Component = () => {
  return (
      <div class="bg-lgray-900 w-full h-screen font-outfit flex">
          <div class="bg-lgray-800 shadow rounded-md text-white w-full sm:w-1/2 mt-5 mb-5 mr-2 ml-2 sm:m-auto">
              <ul role="list" class="divide-y divide-lgray-750">
                  <li class="px-4 py-4 pb-2 sm:px-6 text-center text-xl">
                      Situation question: Who said it, to whom, and about whom?
                  </li>
                  <li class="px-4 py-4 pt-2 sm:px-6 text-center text-xl">
                      "Through
                  </li>
                  <li class="px-4 py-1 sm:px-6 text-center text-sm font-light">
                      SITUATION
                  </li>
                  <li class="px-4 py-4 sm:px-6 text-center text-xl">

                      <button type="button"
                              class="btn inline-flex w-full items-center justify-center px-2 py-1 border border-transparent shadow-sm text-xl transition-colors font-medium rounded-md text-white bg-purple-500 hover:bg-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400">

                          <span class="-mt-1">Syllable</span>

                          {/* Heroicon name: outline/arrow-right */}
                          <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24"
                               stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                          </svg>
                      </button>

                      <button type="button"
                              class="btn inline-flex w-full items-center justify-center px-2 py-1 mt-2 border border-transparent shadow-sm text-xl transition-colors font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500">

                          {/* Heroicon name: solid/forward */}
                          <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"
                               stroke="currentColor">
                              <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                          </svg>
                          <span class="-mt-1">Question</span>

                      </button>

                      <button type="button"
                              class="btn inline-flex w-full items-center justify-center px-2 py-1 mt-2 border border-transparent shadow-sm text-xl transition-colors font-medium rounded-md text-white bg-lgray-700 hover:bg-lgray-600 focus:outline-none focus:ring-1 focus:ring-lgray-600">

                          {/* Heroicon name: solid/cog-6-tooth */}
                          <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"
                               stroke="currentColor">
                              <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
                          </svg>
                          <span class="-mt-1">Settings</span>

                      </button>

                  </li>

              </ul>
          </div>
      </div>
  );
};

export default App;
