
export const Information = () => {
  return (
    <section className="flex gap-10 px-24 py-8">
    <div className="flex flex-col bg-primary-950 py-10 gap-3 px-20 rounded-md flex-grow">
      <h2 className="text-4xl font-semibold text-primary-800">Lorem, ipsum dolor.</h2>
      <h3 className="text-3xl font-bold text-primary-500">Lorem, ipsum.</h3>
      <p className="text-justify text-primary-50">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi debitis nemo magnam obcaecati ex! Quidem dolor eum minus fugiat laboriosam molestiae, eius error adipisci ea, neque totam nemo quam. Distinctio culpa maxime eum, nulla voluptatum magni consequuntur doloremque tenetur, nemo nesciunt ullam quis cumque voluptatem dolore ex iusto animi reprehenderit.
      </p>
      <a href="#social" className="flex justify-center items-center mt-2">
        <button className="rounded-md bg-primary-800 py-2 px-3 text-primary-100 font-medium">Talk with us</button>
      </a>
    </div>
    <div className="flex-grow flex items-center">
      <img className="w-full h-full object-cover rounded-md shadow-xl shadow-black" src="/advance/talking_pic.jpg" alt="" />
    </div>
  </section>
  
  
  )
}