'use client';

export default function MockupPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold">Nhập Liệu Đơn Hàng Sỉ</h1>
          <p className="text-slate-300 mt-2">Hệ thống quản lý đơn hàng bán sỉ</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Selection */}
            <div className="bg-white rounded-lg shadow p-6">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Chọn Khách Hàng
              </label>
              <select className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-sky-500 bg-white">
                <option value="">-- Chọn khách hàng --</option>
                <option value="1">Công ty ABC Ltd.</option>
                <option value="2">Cửa hàng XYZ</option>
                <option value="3">Khách lẻ Nguyễn Văn A</option>
              </select>
            </div>

            {/* Product Selection */}
            <div className="bg-white rounded-lg shadow p-6">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Thêm Sản Phẩm
              </label>
              <div className="flex gap-3">
                <select className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-sky-500 bg-white">
                  <option value="">-- Chọn sản phẩm --</option>
                  <option value="1">Áo Thun Nam - SKU001</option>
                  <option value="2">Áo Sơ Mi Nữ - SKU002</option>
                  <option value="3">Quần Âu Nam - SKU003</option>
                </select>
                <button className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 font-semibold transition">
                  Thêm
                </button>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Các Sản Phẩm Trong Đơn</h3>
              
              {/* Product Card 1 */}
              <div className="border-2 border-slate-200 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">Áo Thun Nam - SKU001</h4>
                    <p className="text-sm text-slate-500">Màu: Xanh dương</p>
                  </div>
                  <button className="text-red-500 hover:text-red-700 font-semibold text-sm">
                    Xóa
                  </button>
                </div>
                
                {/* Size Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <div key={size} className="relative">
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Size {size}
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="0"
                          defaultValue="0"
                          className="w-16 px-2 py-2 border-2 border-slate-200 rounded text-center focus:outline-none focus:border-sky-500"
                        />
                        <button className="text-slate-400 hover:text-slate-600 text-sm">
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="border-2 border-slate-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">Áo Sơ Mi Nữ - SKU002</h4>
                    <p className="text-sm text-slate-500">Màu: Trắng</p>
                  </div>
                  <button className="text-red-500 hover:text-red-700 font-semibold text-sm">
                    Xóa
                  </button>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <div key={size} className="relative">
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Size {size}
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="0"
                          defaultValue="0"
                          className="w-16 px-2 py-2 border-2 border-slate-200 rounded text-center focus:outline-none focus:border-sky-500"
                        />
                        <button className="text-slate-400 hover:text-slate-600 text-sm">
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Tóm Tắt Đơn Hàng</h3>
              
              <div className="space-y-3 pb-4 border-b border-slate-200 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Khách hàng:</span>
                  <span className="font-semibold text-slate-900">Công ty ABC</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Sản phẩm:</span>
                  <span className="font-semibold text-slate-900">2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Tổng số lượng:</span>
                  <span className="font-semibold text-slate-900">45</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 font-semibold transition">
                  Đặt Hàng
                </button>
                <button className="w-full py-3 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-300 font-semibold transition">
                  Lưu Nháp
                </button>
                <button className="w-full py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 font-semibold transition">
                  Hủy
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
