import { useEffect, useState } from 'react';

export const Carrusel = () => {
  const [image, setImage] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage(prevImage => !prevImage);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="w-full bg-gradient-to-tr from-primary-600 to-primary-900 py-20 flex justify-center mt-12 items-center rounded-lg">
      {
        image ? (
          <div key="image" className="flex justify-center items-center animate-blurred-fade-in">
            <img className="w-20 h-20 mr-6" src="/logo advanced-Photoroom.png" alt="Logo" />
            <p className="uppercase text-3xl tracking-widest text-primary-50 font-bold">Advance Management</p>
          </div>
        ) : (
          <div key="text" className="flex justify-center items-center animate-blurred-fade-in">
            <p className="text-xl tracking-widest text-primary-50 font-medium w-2/4">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam recusandae deleniti.&quot;</p>
            <img className="w-20 h-20 ml-6" src="/logo advanced-Photoroom.png" alt="Logo" />
          </div>
        )
      }
    </section>
  );
};

