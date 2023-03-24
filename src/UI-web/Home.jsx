import React from 'react';
import logo from 'Model/icon/logo.png';
import slide1 from 'Model/img/slide-1.png';
import slide2 from 'Model/img/slide-2.png';
import slide3 from 'Model/img/slide-3.png';

const Home = () => {
    return (
        <div>
            <div className="wrapper">
                <div id="toggle-nav" className="slide-menu  hidden">
                    <ul className="slide-menu-main">
                        <li>
                            <form action="">
                                <input type="search" placeholder="Tìm kiếm…" />
                                <button type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </li>
                        <li><a href="#">TRANG CHỦ</a></li>
                        <li><a href="#">GIỚI THIỆU</a></li>
                        <li>
                            <a className="flex flex-col" href="#">NAM</a>
                            <details className="flex flex-col">
                                <summary>
                                    <div className="block-sumary"></div>
                                </summary>
                                <a href="#">Classic</a>
                                <a href="#">Sunbaked</a>
                                <a href="#">Chuck 07s</a>
                                <a href="#">One Star</a>
                                <a href="#">PSY-Kicks</a>
                            </details>
                        </li>
                        <li>
                            <a className="style-a" href="#">NỮ</a>
                            <details>
                                <summary>
                                    <div className="block-sumary"></div>
                                </summary>
                                <a href="#">Classic</a>
                                <a href="#">Sunbaked</a>
                                <a href="#">Chuck 07s</a>
                                <a href="#">One Star</a>
                                <a href="#">PSY-Kicks</a>
                            </details>
                        </li>
                        <li><a href="#">TRẺ EM</a></li>
                        <li><a href="#">PHỤ KIỆN KHÁC</a></li>
                        <li><a href="#">TIN TỨC</a></li>
                        <li><a href="#">LIÊN HỆ</a></li>
                        <li><a href="#">ĐĂNG NHẬP</a></li>
                    </ul>
                    <div className="hd-destroy"></div>
                </div>
                {/* header  */}
                <header className="container">
                    <div className="container flex flex-row justify-around h-[80px] bg-black text-gray-400">
                        <i className="hidden far fa-bars" id="nav" ></i>
                        <button className="font-bold">ĐĂNG NHẬP / ĐĂNG KÝ</button>
                        <div className="logo h-[70px]"><img className="h-[70px]" src={logo} alt="logo" /></div>
                        <div className="flex flex-row items-center">
                            <i className="cursor-pointer fas fa-search"></i>
                            <div className="flex items-center mx-3">
                                <p>Giỏ hàng /</p>
                                <p id="value-cart">0</p>
                                <p>đ</p>
                            </div>
                            <div id="image-cart" className="w-[25px] h-[25px] border-2 border-solid border-white text-center">
                                0
                            </div>
                        </div>
                    </div>
                    <div className="container flex justify-center bg-gray-300">
                        <ul className="h-[53px] w-content flex justify-around font-bold">
                            <li className="hd-active hd-item-hover cursor-pointer"><a className="leading-[50px]" href="#">TRANG CHỦ</a></li>
                            <li className=" hd-item-hover cursor-pointer"><a className="leading-[50px]" href="#">GIỚI THIỆU</a></li>
                            <li className=" hd-item-hover cursor-pointer"><a className="leading-[50px]" href="#">NỮ</a></li>
                            <li className=" hd-item-hover cursor-pointer"><a className="leading-[50px]" href="#">NAM</a></li>
                            <li className=" hd-item-hover cursor-pointer"><a className="leading-[50px]" href="#">TRẺ EM</a></li>
                            <li className=" hd-item-hover cursor-pointer"><a className="leading-[50px]" href="#">PHỤ KIỆN KHÁC</a></li>
                            <li className=" hd-item-hover cursor-pointer"><a className="leading-[50px]" href="#">TIN TỨC</a></li>
                            <li className=" hd-item-hover cursor-pointer"><a className="leading-[50px]" href="#">LIÊN HỆ</a></li>
                        </ul>
                    </div>
                </header>
                {/* content */}
                <div className="w-content mx-auto shadow-black shadow-xl">
                    {/* slide img */}
                    <div className="slide-img flex items-center flex-col w-content mb-[10px] rounded-[8px] overflow-hidden relative">
                        {/* slide item */}
                        <input className="hidden" type="radio" name="radio-btn" id="img-1" defaultChecked />
                        <img className=" w-[100%] opacity-0 aspect-[14/5] absolute scale-50" src={slide1} />

                        {/* slide item */}
                        <input className="hidden" type="radio" name="radio-btn" id="img-2" />
                        <img className=" w-[100%] opacity-0 aspect-[14/5] absolute scale-50" src={slide2} />

                        {/* slide item */}
                        <input className="hidden" type="radio" name="radio-btn" id="img-3" />
                        <img className=" w-[100%] opacity-0 aspect-[14/5] absolute scale-50" src={slide3} />

                        {/* button slide */}
                        <div className="nav-dots w-[100px] h-[10px] flex absolute bottom-0">
                            <label htmlFor="img-1" className="nav-dot rounded-[5px] mx-[2px] bg-slate-600 cursor-pointer transition-all duration-700 ease-in-out" id="img-dot-1"></label>
                            <label htmlFor="img-2" className="nav-dot rounded-[5px] mx-[2px] bg-slate-600 cursor-pointer transition-all duration-700 ease-in-out" id="img-dot-2"></label>
                            <label htmlFor="img-3" className="nav-dot rounded-[5px] mx-[2px] bg-slate-600 cursor-pointer transition-all duration-700 ease-in-out" id="img-dot-3"></label>
                        </div>
                    </div>
                    {/* sản phẩm thương hiệu */}
                    <div className="brand_products w-container grid-container">
                        <div className="brand_products-item flex items-center flex-col cursor-pointer">
                            <div className="bp-item-bgr my-[10px] item-bgr-color1 flex items-center justify-center w-[180px] h-[180px] bg-[#55839f] shadow shadow-[] rounded-[50%]">
                                <img className="bp-item-img h-[80px] shadow-img" src="Model/img/sneaker.png" alt="" />
                            </div>
                            <div className="bp-item-text text-center">
                                <b>Giày sneaker</b>
                                <p className="text-[#fa3d3d]">1.200.000đ</p>
                            </div>
                            <button className="w-[120px] h-[30px] text-[10px] rounded-[15px]">Thêm vào giỏ</button>
                        </div>

                        <div className="brand_products-item flex items-center flex-col cursor-pointer">
                            <div className="bp-item-bgr my-[10px] item-bgr-color2 flex items-center justify-center w-[180px] h-[180px] bg-[#bdbec3] shadow shadow-[] rounded-[50%]">
                                <img className="bp-item-img h-[80px] shadow-img" src="Model/img/jordan.png" alt="" />
                            </div>
                            <div className="bp-item-text text-center">
                                <b>Giày jordan</b>
                                <p className="text-[#fa3d3d]">1.200.000đ</p>
                            </div>
                            <button className="w-[120px] h-[30px] text-[10px] rounded-[15px]">Thêm vào giỏ</button>
                        </div>
                        <div className="brand_products-item flex items-center flex-col cursor-pointer">
                            <div className="bp-item-bgr my-[10px] item-bgr-color3 flex items-center justify-center w-[180px] h-[180px] bg-[#9d041a] shadow shadow-[] rounded-[50%]">
                                <img className="bp-item-img h-[80px] shadow-img" src="Model/img/anta.png" alt="" />
                            </div>
                            <div className="bp-item-text text-center">
                                <b>Giày anta</b>
                                <p className="text-[#fa3d3d]">1.200.000đ</p>
                            </div>
                            <button className="w-[120px] h-[30px] text-[10px] rounded-[15px]">Thêm vào giỏ</button>
                        </div>
                    </div>
                    {/* sản phẩm chính  */}
                    <div className="main_products">
                        <div className="mp-header flex justify-center border-b-2 border-black">
                            <input className='hidden' type="radio" name='mp-header-btn' defaultChecked />
                            <label className="cursor-pointer inline-block h-[50px] text-[.9em] font-bold leading-[50px] px-[5px] mx-[5px] text-[#868686]" htmlFor="mp-toggle-1">SẢN PHẨM MỚI</label>
                            <input className='hidden' type="radio" name='mp-header-btn' />
                            <label className="cursor-pointer inline-block h-[50px] text-[.9em] font-bold leading-[50px] px-[5px] mx-[5px] text-[#868686]" htmlFor="mp-toggle-2">SẢN PHẨM BÁN CHẠY</label>
                            <input className='hidden' type="radio" name='mp-header-btn' />
                            <label className="cursor-pointer inline-block h-[50px] text-[.9em] font-bold leading-[50px] px-[5px] mx-[5px] text-[#868686]" htmlFor="mp-toggle-3">SẢN PHẨM PHỔ BIẾN</label>
                        </div>
                        <div className="mp-main w-container mt-[50px]">
                            <input className="hidden" type="radio" id='mp-toggle-1' name="mp-main-button" defaultChecked />
                            <div className="mp-item w-container hidden justify-around" >
                                <div className="product flex items-center flex-col">
                                    <img className="h-[100px] mb-[20px]" src="Model/img/sneaker.png" />
                                    <div className="bp-item-text text-center">
                                        <b>Giày sneaker</b>
                                        <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                    </div>
                                    <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                                </div>
                                <div className="product flex items-center flex-col">
                                    <img className="h-[100px] mb-[20px]" src="Model/img/sneaker.png" />
                                    <div className="bp-item-text text-center">
                                        <b>Giày sneaker</b>
                                        <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                    </div>
                                    <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                                </div>
                                <div className="product flex items-center flex-col">
                                    <img className="h-[100px] mb-[20px]" src="Model/img/sneaker.png" />
                                    <div className="bp-item-text text-center">
                                        <b>Giày sneaker</b>
                                        <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                    </div>
                                    <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                                </div>
                                <div className="product flex items-center flex-col">
                                    <img className="h-[100px] mb-[20px]" src="Model/img/sneaker.png" />
                                    <div className="bp-item-text text-center">
                                        <b>Giày sneaker</b>
                                        <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                    </div>
                                    <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                                </div>
                            </div>

                            <input className="hidden" type="radio" id='mp-toggle-2' name="mp-main-button" />
                            <div className="mp-item w-container hidden justify-around">
                                <div className="product flex items-center flex-col">
                                    <img className="h-[100px] mb-[20px]" src="Model/img/jordan.png" />
                                    <div className="bp-item-text text-center">
                                        <b>Giày jordan</b>
                                        <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                    </div>
                                    <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                                </div>
                                <div className="product flex items-center flex-col">
                                    <img className="h-[100px] mb-[20px]" src="Model/img/jordan.png" />
                                    <div className="bp-item-text text-center">
                                        <b>Giày jordan</b>
                                        <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                    </div>
                                    <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                                </div>
                                <div className="product flex items-center flex-col">
                                    <img className="h-[100px] mb-[20px]" src="Model/img/jordan.png" />
                                    <div className="bp-item-text text-center">
                                        <b>Giày jordan</b>
                                        <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                    </div>
                                    <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                                </div>
                                <div className="product flex items-center flex-col">
                                    <img className="h-[100px] mb-[20px]" src="Model/img/jordan.png" />
                                    <div className="bp-item-text text-center">
                                        <b>Giày jordan</b>
                                        <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                    </div>
                                    <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                                </div>
                            </div>

                            <input className="hidden" type="radio" id='mp-toggle-3' name="mp-main-button" />
                            <div className="mp-item w-container hidden justify-around">
                                <div className="product flex items-center flex-col">
                                    <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                    <div className="bp-item-text text-center">
                                        <b>Giày anta</b>
                                        <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                    </div>
                                    <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                                </div>
                                <div className="product flex items-center flex-col">
                                    <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                    <div className="bp-item-text text-center">
                                        <b>Giày anta</b>
                                        <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                    </div>
                                    <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                                </div>
                                <div className="product flex items-center flex-col">
                                    <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                    <div className="bp-item-text text-center">
                                        <b>Giày anta</b>
                                        <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                    </div>
                                    <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                                </div>
                                <div className="product flex items-center flex-col">
                                    <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                    <div className="bp-item-text text-center">
                                        <b>Giày anta</b>
                                        <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                    </div>
                                    <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* other product  */}
                    <div className="other_products">
                        <div className="op-header border-b-2 border-black">
                            <p className="text-center w-content inline-block h-[50px] text-[1em] font-bold leading-[50px] px-[5px] mx-[5px] text-[#000000]">PHỤ KIỆN KHÁC</p>
                        </div>
                        <div className="op-main grid-container">
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                        </div>
                    </div>
                    {/* slideshow */}
                    <div className="slideshow w-content h-[500px] bg-[#000]">
                    </div>
                    {/* discount product  */}
                    <div className="discount_products mt-[30px]">
                        <div className="dp-header border-b-2 border-black">
                            <p className="text-center w-content inline-block h-[50px] text-[1em] font-bold leading-[50px] px-[5px] mx-[5px] text-[#000000]">SẢN PHẨM GIẢM GIÁ</p>
                        </div>
                        <div className="dp-main grid-container">
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                            <div className="product flex items-center flex-col mt-[50px]">
                                <img className="h-[100px] mb-[20px]" src="Model/img/anta.png" />
                                <div className="bp-item-text text-center">
                                    <b>Giày anta</b>
                                    <p className="text-[#fa3d3d] mx-[10px]">1.200.000đ</p>
                                </div>
                                <button className="w-[130px] bg-[#e33f3f] text-[#fff] p-[5px] mt-[10px] scale-0 transition-all duration-[0.25] ease-in">Thêm vào giỏ</button>
                            </div>
                        </div>
                    </div>

                </div>
                <footer className="w-[100%] flex bg-[#000] text-[#fff] p-[10px] justify-around">
                    <div className="item max-w-[200px] flex-1 p-[10px]">
                        <p className="text-[1em]">Giới thiệu</p>
                        <div className="h-[2px] w-[30px] bg-[#ff0000]"></div>
                        <div className="text-[.5em]">
                            <p>Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh.</p>
                        </div>
                    </div>
                    <div className="item max-w-[200px] flex-1 p-[10px]">
                        <p className="text-[1em]">Địa chỉ</p>
                        <div className="h-[2px] w-[30px] bg-[#ff0000]"></div>
                        <ul className="text-[.5em]">
                            <li className='flex py-[5px]'>
                                <i class="fas fa-map-marker-alt w-[15px]"></i>
                                <p>Nguyễn Trãi, Hà Đông, Hà Nội</p>
                            </li>
                            <li className='flex py-[5px]'>
                                <i class="fas fa-phone-alt w-[15px]"></i>
                                <p>099999999</p>
                            </li>
                            <li className='flex py-[5px]'>
                                <i class="fas fa-envelope w-[15px]"></i>
                                <p>nguyenlinh13602@gmail.com</p>
                            </li>
                            <li className='flex py-[5px]'>
                                <i class="fas fa-shipping-fast w-[15px]"></i>
                                <p>Plus</p>
                            </li>
                        </ul>
                    </div>
                    <div className="item max-w-[200px] flex-1 p-[10px]">
                        <p className="text-[1em]">Menu</p>
                        <div className="h-[2px] w-[30px] bg-[#ff0000]"></div>
                        <ul className="text-[.5em] grid grid-cols-2">
                            <li className='list-none py-[5px]'>
                                <a href="#">Trang chủ</a>
                            </li>
                            <li className='list-none py-[5px]'>
                                <a href="#">Giới thiệu</a>
                            </li>
                            <li className='list-none py-[5px]'>
                                <a href="#">Cửa hàng</a>
                            </li>
                            <li className='list-none py-[5px]'>
                                <a href="#">Tin tức</a>
                            </li>
                            <li className='list-none py-[5px]'>
                                <a href="#">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item max-w-[200px] flex-1 p-[10px]">
                        <p className="text-[1em]">Mạng xã hội</p>
                        <div className="h-[2px] w-[30px] bg-[#ff0000]"></div>
                        <div className="text-[.5em] grid grid-cols-4">
                            <li className="flex my-[5px] justify-center items-center w-[1.4rem] h-[1.4rem] bg-[#3a589d] rounded-[50%] list-none">
                                <i class="text-[1.5em] fab fa-facebook-f"></i>
                            </li>
                            <li className="flex my-[5px] justify-center items-center w-[1.4rem] h-[1.4rem] bg-[#3b6994] rounded-[50%] list-none">
                                <i class="text-[1.5em] fab fa-instagram"></i>
                            </li>
                            <li className="flex my-[5px] justify-center items-center w-[1.4rem] h-[1.4rem] bg-[#2478ba] rounded-[50%] list-none">
                                <i class="text-[1.5em] fab fa-twitter"></i>
                            </li>
                            <li className="flex my-[5px] justify-center items-center w-[1.4rem] h-[1.4rem] bg-[#cb2320] rounded-[50%] list-none">
                                <i class="text-[1.5em] fab fa-pinterest"></i>
                            </li>
                            <li className="flex my-[5px] justify-center items-center w-[1.4rem] h-[1.4rem] bg-[#fc7600] rounded-[50%] list-none">
                                <i class="text-[1.5em] fas fa-rss"></i>
                            </li>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;