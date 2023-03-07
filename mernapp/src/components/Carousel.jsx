import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
                <div className="carousel-inner" id='carousel' >

                    <div className="carousel-caption" style={{zIndex:'10'}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>

                    <div className="carousel-item active">
                        <img src="https://www.pixelstalk.net/wp-content/uploads/images5/4K-Food-HD-Wallpaper-Free-download.jpg" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://c0.wallpaperflare.com/preview/527/381/127/cooked-meat-on-plate.jpg" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://edge.mwallpapers.com/photos/celebrities/food/food-wallpaper-background-android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4khd-wallpapers-desktop-background-android-iphone-1080p-4k-uap40.jpg" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://c4.wallpaperflare.com/wallpaper/303/793/304/buffet-meal-food-brunch-wallpaper-preview.jpg" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}


