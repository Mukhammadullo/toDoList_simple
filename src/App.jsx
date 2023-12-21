import { useState } from 'react'
import './App.css'

function App() {

  // input add
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  // modal
  const [modal, setModal] = useState(false)

  // id
  const [idx, setIdx] = useState(null)
  const [inpEditName, setinpEditName] = useState("")
  const [inpEditPhone, setInpEditPhone] = useState("")

  // input search
  const [search, setSearch] = useState('')

  // input Select
  const [select, setSelect] = useState("")

  // data
  const [data, setData] = useState([
    {
      id: 1,
      name: "Muhammadullo",
      phone: "Dushanbe",
      completed: false
    },
    {
      id: 2,
      name: "Hamza",
      phone: "Dushanbe",
      completed: false
    },
    {
      id: 3,
      name: "Amir",
      phone: "Moscow",
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
  function comp(id) {
    let newData = data.map((element) => {
      if (element.id == id) {
        element.completed = !element.completed
      }
      return element
    }
    )
    setData(newData)
  }


  //modalOpen
  function modalOpen(element) {
    setModal(true);
    setinpEditName(element.name)
    setInpEditPhone(element.phone)
    setIdx(element.id)
  }

  function editUser() {
    let newUser = data.map((element) => {
      if (element.id == idx) {
        element.name = inpEditName
        element.phone = inpEditPhone
      }
      return element
    })
    setData(newUser)
    setModal(false)
  }



  return (
    <>




      <div className='w-[100%] h-[20vh] flex items-center justify-center  shadow-2xl'>
        {/* inputName */}
        <input placeholder='search ....' onChange={(event) => setSearch(event.target.value)} className='w-[350px] h-[60px] rounded-[12px] p-[8px] m-[12px] border-black border-solid  border-[1px]' />

        <input value={name} onChange={(event) => setName(event.target.value)} placeholder='Name.....' className='w-[350px] h-[60px] rounded-[12px] p-[8px] m-[12px] border-black border-solid   border-[1px]' />

        <input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder='phone.....' className='w-[350px] h-[60px] rounded-[12px] p-[8px] m-[12px] border-black border-solid border-[1px]' />

        {/* select */}
        <select value={select} onChange={(event) => setSelect(event.target.value)} className="w-[150px] h-[50px] border-black border-solid  border-[1px] m-[5px] rounded-[12px]">
          <option value="">All</option>
          <option value="dushanbe">Dushanbe</option>
          <option value="moscow">Moscow</option>

        </select>


        <button onClick={() => addUser()} className='w-[150px] h-[55px] rounded-[12px] bg-blue-500 text-[white]  shadow-2xl'>Add New+</button>
      </div>



      <div className='w-[98%] m-auto mt-[40px] p-[20px] bg-black text-[white] h-auto '>
        {data.filter((element) => {
          return search.toLocaleLowerCase() === '' ? element : element.name.toLocaleLowerCase().includes(search)
        })
          .filter((element) => element.phone.toLocaleLowerCase().trim().includes(select.toLocaleLowerCase().trim()))
          .map((element) => {
            return (
              <div key={element.id} className="w-[95%] h-[250px] m-[20px] p-[2%] rounded-[12px] border-red-500 border-solid border-[2px]" >
                <h1 className='text-[26px] font-semibold'>{element.id}</h1>
                <h1 style={{color:element.completed? "red":"yellow"}} className="text-[36px]">{element.name}</h1>
                <h1 className='text-[white] text-[26px]'>{element.phone}</h1>
                <button onClick={() => delUser(element.id)} className='w-[150px] h-[55px] rounded-[12px] bg-red-500 m-[20px] text-[22px] font-semibold text-[white]  shadow-2xl'>Delete</button>
                <button onClick={() => modalOpen(element)} className='w-[150px] h-[55px] rounded-[12px] bg-red-500 m-[20px] text-[22px] font-semibold text-[white]  shadow-2xl'>Edit</button>
                <input type={'checkbox'} checked={element.completed} onChange={()=>comp(element.id)} />
              </div>
            )
          })}
      </div>

      {/* dialogEdit */}
      {
        modal ? (
          <div className='w-[850px] absolute top-[35%] left-[20%] flex justify-center items-center rounded-[26px] h-[450px] bg-red-500'>
            <input value={inpEditName} onChange={(e) => setinpEditName(e.target.value)} className='w-[260px] h-[40px] m-[10px]   rounded-[6px] p-[10px]' />
            <input value={inpEditPhone} onChange={(e) => setInpEditPhone(e.target.value)} className='w-[260px] h-[40px] m-[10px] rounded-[6px] p-[10px]' />
            <button onClick={() => editUser()} className="w-[120px] h-[40px] bg-blue-500 m-[5px] rounded-[10px] font-bold text-[white]">Save</button>
            <button onClick={() => setModal(false)} className="w-[120px] h-[40px] bg-blue-500 m-[5px] rounded-[10px] font-bold text-[white]">Close</button>
          </div>
        ) : null
      }


    </>
  )
}

export default App
