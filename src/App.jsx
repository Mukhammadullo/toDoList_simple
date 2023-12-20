import { useState } from 'react'
import './App.css'

function App() {

  // input add
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  // input search
  const [search, setSearch] = useState('')

  // data
  const [data, setData] = useState([
    {
      id: 1,
      name: "Muhammadullo",
      phone: "+992-233-33-11",
      completed: false
    },
    {
      id: 2,
      name: "Hamza",
      phone: "+992-434-78-11",
      completed: false
    },
    {
      id: 3,
      name: "Amir",
      phone: "+992-783-73-31",
      completed: false
    }
  ])


  // add User
  function addUser() {
    let newUser = {
      id: new Date().getMinutes(),
      name: name,
      phone: phone,
      completed: false
    }
    setData([...data, newUser])
  }

  // delete
  function delUser(id) {
    setData(data.filter((element) => {
      return element.id != id
    }))
  }

  // completed
  function comp() {
    let newData = data.map((element) => {
      if (element.id == id) {
        element.completed = !element.completed
      }
      return element
    }
    )
    setData(newData)
  }

  return (
    <>

      <div className='w-[100%] h-[20vh] flex items-center justify-center  shadow-2xl'>
        {/* inputName */}
        <input placeholder='search ....' onChange={(event) => setSearch(event.target.value)} className='w-[350px] h-[60px] rounded-[12px] p-[8px] m-[12px] border-black border-solid  border-[1px]' />

        <input value={name} onChange={(event) => setName(event.target.value)} placeholder='Name.....' className='w-[350px] h-[60px] rounded-[12px] p-[8px] m-[12px] border-black border-solid   border-[1px]' />

        <input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder='phone.....' className='w-[350px] h-[60px] rounded-[12px] p-[8px] m-[12px] border-black border-solid border-[1px]' />

        <button onClick={() => addUser()} className='w-[150px] h-[55px] rounded-[12px] bg-blue-500 text-[white]  shadow-2xl'>Add New+</button>
      </div>



      <div className='w-[98%] m-auto mt-[40px] p-[20px] bg-black text-[white] h-auto '>
        {data.filter((element) => {
          return search.toLocaleLowerCase() === '' ? element : element.name.toLocaleLowerCase().includes(search)
        }).map((element) => {
          return (
            <div key={element.id} className="w-[95%] h-[250px] m-[20px] p-[2%] rounded-[12px] border-red-500 border-solid border-[2px]" >
              <h1 className='text-[26px] font-semibold'>{element.id}</h1>
              <h1 className='text-[red] text-[36px] font-bold'>{element.name}</h1>
              <h1 className='text-[white] text-[26px]'>{element.phone}</h1>
              <button onClick={() => delUser(element.id)} className='w-[150px] h-[55px] rounded-[12px] bg-red-500 m-[20px] text-[22px] font-semibold text-[white]  shadow-2xl'>Delete</button>
              <input type={'checkbox'} checked={element.completed} />
            </div>
          )
        })}
      </div>

    </>
  )
}

export default App
