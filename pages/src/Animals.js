import Image from "next/image";


const Animal = props => {
  return (

            <div class="bg-indigo-100 shadow rounded-lg overflow-hidden p-4 m-1">

              <Image height={500} width={500} src={`/${props.img}`}></Image>
              <div class="p-4">
                <h2 class="font-bold text-center">{props.type}</h2>
                <h2 class="text-center">Price: {props.adoption_fee}</h2>
                <h2 class="text-center">Emotions: {props.state} </h2>
              </div>
              </div>
          // <div className="p-1 m-1 content-center border-dashed">

//<img src={`/${props.img}`} class="w-full" />
      // <h2>{props.type}</h2>
      // <b>{props.state}</b>
      // <h2>{props.adoption_fee}</h2>
  //  </div>
  //</div>

)
}
export default Animal
