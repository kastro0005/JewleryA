import { connect } from "react-redux";
import { GiDiamondHard } from "react-icons/gi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" bg-white text-center text-black lg:text-left shadow-2xl shadow-black">
      <div className="flex items-center justify-center border-b-2 border-y-black p-6  lg:justify-between shadow-">
        <div className="mr-12 hidden lg:block ">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          {/* <!-- WhatsApp --> */}
          <Link
            target="_blank"
            rel="noreferrer"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
            to="https://api.whatsapp.com/send/?phone=18136387962&text&type=phone_number&app_absent=0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              //fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </Link>
          {/* <!-- Clapper --> */}
          <Link
            className="mr-6 text-neutral-600 dark:text-neutral-200"
            target="_blank"
            rel="noreferrer"
            to="https://clapperapp.com/Anita.el21?is_invite=1&r=e6gnVpK3oG&c=in&m=co">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              enableBackground="new 0 0 20 20"
              space="preserve">
              {" "}
              <image
                id="image0"
                width="20"
                height="20"
                x="0"
                y="0"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB+FBMVEUAAAAdHx8wNDQKCw0LDQ5RW2NcYGETGiELCwwHBwcUHCIZGRkODg8VHSRpaWlqampdXV1aWlpYWFhkZWYAAAEABAxsbGwCAgIICAgKCgoGBwYICQkHBwgdHh82NzoBAQEAAQEGBgcDBAUGCQofKi8CAgMOExYICgxPV2ADAwQHCQsyPEIdIyohKC0YGhzt+P4DBAQ0PEEhJCYcICQnKi0oLDAdJywjKzEMDA09TFQjLjUKCwsHCQoPEhOMssgEBQYFBwcTFRcGBwgFBwgsNj4LDA4MDhAICQkDAwMDBAQfICIDBAQCAwMFBQUBAQEDAwQKCgoCAgIBAQEFBgcMDAwFBQUCAwMDAwMDAwMICQoeICEEBAQBAQEEBAQDAwMEBAUKCwsEBQUBAQEBAQEGBwgGBgYBAQEDBAQPDxACAgICAgMICQkBAgIAAAACAwMHBwgAAAEDBAUEBAQBAQEDBAUAAAAAAQEEBQYDAwMBAQIHCgxRVFkDAwMDAwMEBAQBAQECAwMYGhwCAgMBAgIICQoDAwMBAQEEBAUFBgcCAwMCAgMCAgMCAwMAAAECAgMICQoFBgYDAwQCAgICAgICAwMDBAUKDRAEBQUEBAUCAwMBAQIFBwgMDA0CAgIAAAADBAQKCwwCAgMCAgMKDxAGBwgGBwkAAAD////XfDnDAAAApnRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBxi0cgOLj1HyXCLR7C4MW4OEh00In+6Qgl8NcfzpOmL5XQq/hybc/Vwr+ERm5yn+9Tl1uwkBnGI/84IEpcUeefE9K4iXlbb9rCo/gJKTklEEaY2c2CoPy/hYDrOTBRQOmMlqWwAAAAFiS0dEp8C3KwMAAAAHdElNRQfnCw4LJxsMb1PQAAABIUlEQVQY02NggANGJmYWZlYGFMDGwODqxsyOKsjB6e7hycCFIsbN4+W9zIeBF8rl4xcQFBJmYPD1W+YvIsonBhQSl5AES0kFBC4LCgYypGUYGGQlQ0LDwiMio6KXLYuJjYuLT5BmYJBjSExatiw5JTVtGRgkpcszMPBkZAKZWdk5ELFluXkKDAyK+cnLlhUUFkHFlhWXKAENji9dtqysvAImWFmlzMBQXQNkldbW1UMFGxhUGBgam0DM5pbWNrBYTLuqGlB7R2dXd09vX/+EiZMmd0+ZOk1dAyioCcTTly2bAfWfuhaQ0NbR1dOfuWzWbANDI2MTUzNzqKTFnLnz5jNYWqEEkPWChYsW29iihqQdw5Kl9g6oYgyODE7OSi5IAgAREmMhtkuhqwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMS0xNFQxMTozOToyNyswMDowMHYau6MAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTEtMTRUMTE6Mzk6MjcrMDA6MDAHRwMfAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTExLTE0VDExOjM5OjI3KzAwOjAwUFIiwAAAAABJRU5ErkJggg=="
              />
            </svg>
          </Link>
          {/* <!-- TikTok --> */}
          <Link
            target="_blank"
            rel="noreferrer"
            className="mr-6 text-neutral-600 dark:text-neutral-200"
            to="http://www.tiktok.com/@yuyitas.jewerly.l">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-5 w-5">
              <path
                //fill="currentColor"
                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left ">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          {/* <!-- Encabezado --> */}
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <GiDiamondHard />
              -Golden Unique Jewels
            </h6>
            <p>To complete your dreams, you just need a golden complement...</p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4 hover:underline hover:underline-offset-4">
              <Link to="/Anillos">Rings</Link>
            </p>
            <p className="mb-4 hover:underline hover:underline-offset-4">
              <Link to="/Cadenas">Chains</Link>
            </p>
            <p className="mb-4 hover:underline hover:underline-offset-4">
              <Link to="/Aretes">Earrings</Link>
            </p>
            <p className="mb-4 hover:underline hover:underline-offset-4">
              <Link to="/Dijes">Charms</Link>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Others
            </h6>
            <p className="mb-4 hover:underline hover:underline-offset-4">
              <Link to="/Pircings">Pircings</Link>
            </p>
            <p className="mb-4 hover:underline hover:underline-offset-4">
              <Link to="/Brazaletes">Bracelets</Link>
            </p>
            <p className="mb-4 hover:underline hover:underline-offset-4">
              <Link to="/Tobilleras">Anklets</Link>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {/* <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                //fill="currentColor"
                className="mr-3 h-5 w-5">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Direccion fisica del local
            </p> */}
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                //fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              +1 (813) 638-7962
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              yuyitasjewelry@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className=" p-6 text-center  border-2 border-y-black">
        <span>© 2023 Copyright: </span>
        <span className="font-semibold ">Sierra-Esperanza Creations</span>
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Footer);
