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
ViewModal.getInitialProps = ({ query }) => {
  const { url } = query
  return { url }
}
export default ViewModal