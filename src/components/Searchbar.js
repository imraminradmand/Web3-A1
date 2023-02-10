const Searchbar = () => {
  return (
    <div class="flex h-screen w-screen items-center justify-center p-5">
      <div class="w-full rounded-lg bg-gray-200 p-5 w-2/4">
        <div class="flex">
          <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              class="pointer-events-none absolute w-5 fill-gray-500 transition"
            ></svg>
          </div>
          <input
            type="text"
            class="w-full bg-white pl-2 text-base font-semibold outline-0"
            placeholder=""
            id=""
          />
          <input
            type="button"
            value="Search"
            class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
