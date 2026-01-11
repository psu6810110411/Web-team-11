import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* 1. Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-2xl font-black text-blue-600 tracking-tighter">TRAVEL.GO</div>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-blue-600 transition">ที่พัก</a>
          <a href="#" className="hover:text-blue-600 transition">เที่ยวบิน</a>
          <a href="#" className="hover:text-blue-600 transition">กิจกรรม</a>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition">
          เข้าสู่ระบบ
        </button>
      </nav>

      {/* 2. Hero Section & Search Bar */}
      <section className="relative h-[500px] flex items-center justify-center bg-blue-900">
        {/* สีพื้นหลังไว้ก่อน หรือจะใส่รูปภาพภายหลัง */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
        
        <div className="relative z-10 text-center px-4 w-full max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            ค้นพบจุดหมายถัดไปของคุณ
          </h1>
          
          {/* ฝังชั่น Search Box กล่องค้นหา */}
          <div className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-gray-100 w-full">
              <span className="text-gray-400">📍</span>
              <input type="text" placeholder="จะไปที่ไหน?" className="outline-none w-full bg-transparent" />
            </div>
            <div className="flex-1 flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-gray-100 w-full">
              <span className="text-gray-400">📅</span>
              <input type="text" placeholder="วันเดินทาง" className="outline-none w-full bg-transparent" />
            </div>
            <button className="w-full md:w-auto bg-orange-500 text-white px-10 py-4 rounded-xl md:rounded-full font-bold hover:bg-orange-600 transition duration-300">
              ค้นหา
            </button>
          </div>
        </div>
      </section>

      {/* ฝังชั่น card จองตัว */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'ภูเก็ต', price: '1,200', color: 'bg-blue-200' },
          { name: 'เชียงใหม่', price: '800', color: 'bg-green-200' },
          { name: 'กระบี่', price: '1,500', color: 'bg-teal-200' },
          { name: 'กรุงเทพฯ', price: '500', color: 'bg-yellow-200' },
        ].map((place, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition group border border-gray-100">
            {/* ส่วนรูปภาพ: ใส่สีพื้นหลังสำรองไว้เผื่อรูปไม่โหลด */}
            <div className={`h-48 ${place.color} overflow-hidden flex items-center justify-center text-gray-400`}>
              {/* คุณสามารถเปลี่ยน src เป็นไฟล์รูปจริงในเครื่องได้ภายหลัง */}
              <img 
                src={`https://source.unsplash.com/featured/?${place.name},travel`} 
                alt={place.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                onError={(e) => { e.target.style.display = 'none'; }} // ถ้าโหลดรูปไม่ได้ให้ซ่อนตัวรูปแล้วโชว์สีพื้นหลังแทน
              />
              <span className="absolute text-sm font-bold">Image of {place.name}</span>
            </div>
            
            <div className="p-5">
              <h3 className="font-bold text-xl mb-1">{place.name}</h3>
              <p className="text-gray-500 text-sm mb-4">เริ่มต้น ฿{place.price} / คืน</p>
              <div className="flex justify-between items-center">
                <span className="text-orange-500 font-bold">⭐⭐⭐⭐⭐</span>
                <button className="text-blue-600 font-bold hover:underline">ดูรายละเอียด</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

////{/* ตัวอย่างการจัดโครงสร้างตามแบบ Visily */}
// <div className="flex min-h-screen">
// {/* 1. Sidebar (ถ้ามีใน Visily) */}
// <aside className="w-64 bg-white border-r hidden lg:block">
// {/* ใส่เมนูตรงนี้ */}
// </aside>
//
////{/* 2. Main Content */}
// <main className="flex-1 p-8">
// {/* 3. Grid System สำหรับการ์ดท่องเที่ยว */}
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// {/* นำไฟล์ Visily ที่เป็น Card มาใส่ตรงนี้ */}
// </div>
// </main>
// </div>