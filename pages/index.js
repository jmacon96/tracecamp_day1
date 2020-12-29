import Head from 'next/head'
import Animals from "../public/animals.json";
import Animal from "./src/Animals.js";
import styles from '../styles/Home.module.css';

export default function Home() {

  const animalFormat = p => <Animal type={p.type} state={p.state} img = {p.img}   adoption_fee = {p.adoption_fee} />
  const kittiesOnly = p => (p.type == "cat" || p.type =="monkey") && (p.state == 'sad')
  const kitties = Animals.filter(kittiesOnly)
  const kittiesFormatted = kitties.map(animalFormat)
  const sumTogether = (x,y) => x + y.adoption_fee
  const totalAdoptionFee = kitties.reduce(sumTogether,0)

  return (
    <div>
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-300 to-yellow-100">

      {kittiesFormatted}

    </div>

    <div className="bg-gradient-to-r from-blue-300 to-yellow-100">
      <h1 className="text-5xl text-center p-16">Total Price of sad animals 😢 = ${totalAdoptionFee}</h1>
    </div>

    <div className="bg-gradient-to-r from-blue-300 to-yellow-100">
      <p className="text-center"> Designed by Jushawn Macon and Colton Smith </p>
    </div>
</div>

  )
}
