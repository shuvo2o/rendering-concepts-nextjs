import Image from "next/image";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="p-4">
      <h1>Wellcome to my Theme</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur illum rerum fugit accusamus laudantium, mollitia veniam adipisci deleniti aut iure doloremque quos saepe quaerat similique. Necessitatibus dignissimos quaerat libero dolorem!</p>
      <ThemeSwitcher />
      <div className="mt-10 border rounded-lg bg-gray-50 dark:bg-gray-700 text-black dark:text-white">
        <h2>About Theme</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate consequatur beatae a autem quas iusto, ad distinctio, eaque voluptates officia enim architecto laboriosam praesentium dicta aperiam unde ea, odit fuga. Molestiae aliquid quis accusantium vero, dolore ea illum nam dolorum earum iste aspernatur doloremque, deserunt quo. Nemo nam ipsam rem culpa id hic molestias animi, quos omnis quas, veritatis nobis reiciendis voluptatem voluptate optio laudantium beatae repudiandae facilis tenetur aliquid, recusandae iusto quidem cum mollitia. Veniam expedita eaque tempore itaque error quam illo deleniti esse beatae, delectus qui vero modi optio quas sapiente maiores et voluptates eligendi quasi animi.</p>
      </div>
    </div>
  );
}
