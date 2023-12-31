import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { DLT, ADD,REMOVE } from '../redux/action/action';

function CardsDetail() {
  const [data, setData] = useState([]);
  // console.log(data);
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  //tìm theo id
  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  // const compare =useCallback(() => {
  //   let comparedata = getdata.filter((e) => {
  //     return e.id === id
  //   });
  //   setData(comparedata);
  // },[id,getdata]); 
  const compare = ()=>{
    let comparedata = getdata.filter((e)=>{
      return e.id == id
    });
    setData(comparedata);
  }
  //add data

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  }

  useEffect(() => {
    compare();
  }, [id])


  //xóa
  const dlt = (id) => {
    dispatch(DLT(id))
    navigate("/");
  }
  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item))
  }

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
            {
              data.map((ele) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={ele.imgdata} alt="" />
                    </div>

                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p> <strong>Restaurant</strong>  : {ele.rname}</p>
                            <p> <strong>Price</strong>  : ${ele.price}</p>
                            <p> <strong>Dishes</strong>  : {ele.address}</p>
                            <p> <strong>Total</strong>  :$ {ele.price * ele.qnty}</p>
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                              <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                              <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                              <span style={{ fontSize: 24 }} onClick={() => send(ele)} >+</span>

                            </div>

                          </td>
                          <td>
                            <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★	</span></p>
                            <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                            <p onClick={() => dlt(ele.id)}><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
                          </td>
                        </tr>
                      </Table>
                    </div>

                  </>
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetail