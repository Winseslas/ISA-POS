import { Map, Marker } from "pigeon-maps";
import { FaPhone, FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="relative h-96 rounded-lg bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')]">
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black bg-opacity-50 p-6 text-center text-white">
            <h1 className="text-3xl font-bold md:text-4xl">Contactez-nous pour plus d'informations</h1>
            <p className="mt-4 text-lg">Vous pouvez bénéficier d'une utilisation gratuite d'iSA POS !!!</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-gray-50 p-8">
            <form>
              <div className="-mx-2 flex flex-wrap">
                <div className="w-full px-2 md:w-1/2">
                  <label className="mb-2 block text-sm text-gray-700">Nom(s) et Prénom(s) *</label>
                  <input type="text" className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40" />
                </div>
                <div className="mt-4 w-full px-2 md:mt-0 md:w-1/2">
                  <label className="mb-2 block text-sm text-gray-700">Entreprise</label>
                  <input type="text" className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40" />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm text-gray-700">Téléphone *</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">+237</span>
                  <input type="text" className="block w-full rounded-md border border-gray-200 bg-white py-2 pl-12 pr-4 text-gray-700 focus:border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40" />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm text-gray-700">Email *</label>
                <input type="email" className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40" />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm text-gray-700">Votre besoin *</label>
                <select className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40">
                  <option>Démo gratuite</option>
                </select>
              </div>

              <div className="mt-4 w-full">
                <label className="mb-2 block text-sm text-gray-700">Commentaire ou besoin *</label>
                <textarea className="block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40"></textarea>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="rounded-md bg-green-600 px-8 py-2.5 font-semibold leading-5 text-white transition-colors duration-300 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50">
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <IoLocationOutline size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Adresse</h3>
                <p className="mt-2 text-gray-600">Yaoundé – Mfandena Omnisport, General Management</p>
                <p className="mt-1 text-gray-600">Douala – Akwa, place called Douala Bar – Rue Pau</p>
                <p className="mt-1 text-gray-600">BP 14 573 Yaoundé – Cameroun</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <FaRegClock size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Horaires</h3>
                <p className="mt-2 text-gray-600">Lundi au Vendredi 8 AM - 5 PM</p>
                <p className="mt-1 text-gray-600">Samedi 8:30 AM - 1 PM</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <FaPhone size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
                <p className="mt-2 text-gray-600">+237 683 92 43 52</p>
                <p className="mt-1 text-gray-600">+237 674 41 31 24</p>
                <p className="mt-1 text-gray-600">+237 654 09 78 65</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 h-96 w-full overflow-hidden rounded-lg">
          <Map height={384} defaultCenter={[3.848, 11.5021]} defaultZoom={12}>
            <Marker width={50} anchor={[3.848, 11.5021]} />
          </Map>
        </div>
      </div>
    </div>
  );
};

export default Contact;
