import {
  useFBX
} from '@react-three/drei';
const ViewModal = ({ url }) => {
  const fbx = useFBX(url)
  console.log('====================================');
  console.log({ fbx });
  console.log('====================================');
  return (
    <div>ViewModal</div>
  )
}
ViewModal.getStaticProps = ({ query }) => {
  const { url } = query
  return {
    props: {url}, // will be passed to the page component as props
  }
}
export default ViewModal
