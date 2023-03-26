
import { addDoc, deleteDoc, doc, getDoc, getDocs, limit, onSnapshot, orderBy, query, startAfter, updateDoc, where } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
const FirebaseFun = (nameData, path = '') => {
  const formatData = (data) => {
    let dataTemp = data.data()
    dataTemp.id = data.id
    if(dataTemp.time){
      dataTemp.time = Number(dataTemp.time)
    }
    if(dataTemp.data){
      dataTemp.data = JSON.parse(dataTemp.data)
    }
    return dataTemp
  }
  const getDataByQuery = async (nameData, key, value, match = '==') => {
    const docDetail = await query(nameData, where(key, match, value))
    const citySnapshot = await getDocs(docDetail)
    return citySnapshot.docs.map((doc) => {
      return formatData(doc)
    })
  }
  return {
    getAllDataRealTime: async (callback = null) => {
      await onSnapshot(nameData, (doc) => {
        let arr = []
        doc.forEach(doc => {
          arr.push(formatData(doc))
        })
        callback && callback(arr)
      });
    },
    getAllData: async () => {
      const citySnapshot = await getDocs(nameData)
      return citySnapshot.docs.map((doc) => {
        return formatData(doc)
      })
    },
    getLimit: async (page = 1) => {
      let listData = []
      let totalData = 0
      let item = 0
      let index = 0
      const citySnapshot = await getDocs(nameData)
      await citySnapshot.docs.forEach((doc) => {
        if(page === 1 && index <= totalData){
          let data = doc.data()
          data.id = doc.id
          index++
          totalData++
          listData.push(data)
        }
        item++
      })
      return {
        data:listData,
        totalData,
        totalPage:item / totalData
      }
    },
    getDataSort: async (page = 1) => {
      let listData = []
      let totalData = 0
      let totalPage = 0
      let index
      const citySnapshot = await getDocs(nameData)
      citySnapshot.docs.forEach((doc) => {
        totalPage++
        if(page === 1 && index < totalData){
          let data = doc.data()
          data.id = doc.id
          index++
          totalData++
          listData.push(data)
        }
      })
      return {
        data:listData,
        totalData,
        totalPage:totalPage / totalData
      }
    },
    getDataLimit: async (limitData = 10) => {
      let citySnapshot = query(nameData, orderBy('from'), limit(limitData));
      citySnapshot = await getDocs(citySnapshot)
      return citySnapshot.docs.map((doc) => {
        return formatData(doc)
      })
    },
    getMoreData: async (start, limitData = 10) => {
      let citySnapshot = query(nameData, orderBy('from'), startAfter(start), limit(limitData));
      citySnapshot = await getDocs(citySnapshot)
      return citySnapshot.docs.map((doc) => {
        return formatData(doc)
      })
    },
    getDataByID: async (id) => {
      const temp = doc(nameData, id)
      let data = await getDoc(temp)
      return formatData(data)
    },
    getDataByAddress: async (address) => {
      return getDataByQuery(nameData, 'to', address.toLowerCase(), '==')
    },
    getDataByContract: async (contract) => {
      return getDataByQuery(nameData, 'contract', contract, '==')
    },
    getDataByHash: async (hash) => {
      return getDataByQuery(nameData, 'hash', hash, '==')
    },
    addData: async (data) => {
      const add = await addDoc(nameData, data)
      if (add) {
        return true
      }
      return false
    },
    updateData: async (id, data, callBack) => {
      const temp = await doc(nameData, id)
      await updateDoc(temp, data)
      callBack()
    },
    deleteData: async (id) => {
      await deleteDoc(doc(nameData, id))
    },
    upLoadImg: async function (file) {
      const pathImg = `/${path}`
      return new Promise(async (resolve, reject) => {
        await uploadBytes(pathImg, file).then((snapshot) => {
          resolve(true)
        }).catch(() => {
          reject(false)
        })
      })
    },
    getPathImg: async function (name) {
      const pathImg = `/${path}/${name}`
      return getDownloadURL(ref(nameData, pathImg))
        .then((url) => {
          return url
        })
        .catch((error) => {
          // Handle any errors
        })
    },
  }
}
export default FirebaseFun
