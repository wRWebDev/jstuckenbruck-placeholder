import firebase from '../db/firebase'
import Headers from '../components/Headers'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Page = ({ biography }) => {

  return (
    <>
      <Headers />
      <Main 
        biography={biography}
      />
      <Footer />
    </>
  )
}   

export async function getServerSideProps(ctx){
  const biog = await firebase
    .firestore()
    .collection('pages')
    .doc('about')
    .get()

  return { 
    props: { 
      biography: biog.data()
    } 
  }
}

export default Page