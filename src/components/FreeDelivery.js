import React from "react";

function FreeDelivery() {
  return (
    <>
      <div className="foodDeliver">
        <div className="container mx-auto ">
          <div className="foodDeliverReverse grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 ">
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6">
              <img src={`${process.env.PUBLIC_URL}/images/foodDel.png`} />
            </div>
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6">
              <div className="foodDelCont">
                <h6>WE OFFER</h6>
                <h2><span>Free</span> Delivery!</h2>
                <p>
                  Celery potato scallion desert raisin horseradish spinach
                  carrot soko. Lotus root water spinach fennel kombu maize
                  bamboo shoot green bean swiss chard seakale pumpkin onion
                  chickpea gram corn nuts salsify bunya pie sprout coriander
                  water.
                </p>
                <button
                  type="button"
                  style={{ color: "white" }}
                  className="getStarted font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div  className="deliveryBox grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 "  >
             
            <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 ">
                <div className="fooDelboxCont">
                <img src={`${process.env.PUBLIC_URL}/images/fd1.png`} alt="..."  />
                    <div><h4>Great Location</h4>
               <p>Turnip greens yarrow ricebean rutabaga</p></div>
                </div>
            </div>
            <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12">
                <div className="fooDelboxCont">
                <img src={`${process.env.PUBLIC_URL}/images/fd2.png`} alt="..."  />
                    <div><h4>Home Made</h4>
               <p>Turnip greens yarrow ricebean rutabaga</p></div>
                </div>
            </div>
            <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12">
                <div className="fooDelboxCont">
                <img src={`${process.env.PUBLIC_URL}/images/fd3.png`} alt="..."  />
                    <div><h4>Nature First</h4>
               <p>Turnip greens yarrow ricebean rutabaga</p></div>
                </div>
            </div>
            <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12">
                <div className="fooDelboxCont">
                <img src={`${process.env.PUBLIC_URL}/images/fd4.png`} alt="..."  />
                    <div><h4>Healthy Food</h4>
               <p>Turnip greens yarrow ricebean rutabaga</p></div>
                </div>
            </div>
             
            
            
           
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeDelivery;
