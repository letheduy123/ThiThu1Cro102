// import { useDispatch, useSelector } from "react-redux";
// import {TextInput,Button,  Text, View,Image,TouchableOpacity, ScrollView} from "react-native";
// import { useEffect, useState } from "react";
// import { fetchTodos,deleteTodoApi,addTodoAPI,updateTodoApi} from '../redux/actions/todoAction';
// const TodoScreen  =()=>{
//       //Khai báo  state để thực hiện thêm
//       const [tenxe, setTenXe] = useState('');
//       const [mausac, setMauSac] = useState(''); 
//       const [giaban, setGiaBan] = useState('');
//       const [mota, setMoTa] = useState('');
//       const [image, setImage] = useState('');

//        // Dành cho sửa: Cần có state lưu trạng thái đang sửa bản ghi nào
//     const [editTenXe, setEditTenXe] = useState('');// chuỗi tiêu đề
//     const [editMauSac, setEditMauSac] = useState('');
//     const [editGiaBan, setEditGiaBan] = useState('');
//     const [editMoTa, setEditMoTa] = useState('');
//     const [editImage, setEditImage] = useState('');
//     const [editId, setEditId] = useState(null); //lưu id bản ghi cần sửa
 

//    //lấy  danh sách dữ liệu từ store của redux
//    const  listTodo =  useSelector(state=>state.listTodoStore.listTodo);
//    // lấy đối tượng để điều khiển các action
//    const dispatch = useDispatch();// của redux
//    // khi vào ứng dụng sẽ gọi action fetchTodos để kéo dữ liệu từ API về store của redux
//    useEffect(() => {
//        dispatch(fetchTodos());
//      }, []);
//      //delete
//         // hàm xử lý xóa
//     const handleDeleteTodo =async (id)=>{
//         dispatch(deleteTodoApi(id))
//             .then((result) => {
//                 console.log('Todo deleted successfully!');
//             })
//             .catch((error) => {
//                 console.error('Error deleting todo:', error);
//             });
//     }
//     //insert
  
    
// // hàm xử lý việc thêm
//     const handleAddTodo = ()=>{
//         let duLieuThem = {  ten_xe: tenxe , mau_sac: mausac,gia_ban:giaban,mo_ta:mota,hinh_anh:image};
//         // dispatch( addTodo ( duLieuThem )  );
//         dispatch(addTodoAPI(duLieuThem))
//         .then((result) => {
//             // console.log(result);
//             console.log('Todo add successfully!');
//         })
//         .catch((error) => {
//             console.error('Error add todo:', error);
//         });
//     }
//     //update
//     const handleEdit = (id, tenxe,mausac,giaban,mota,hinh_anh) =>{
//         // hàm này để  ẩn hiện form sửa
//         setEditTenXe(tenxe);
//         setEditId(id);
//         setEditMauSac(mausac);
//         setEditGiaBan(giaban);
//         setEditMoTa(mota);
//         setEditImage(hinh_anh);
//     }
//     // hàm lưu kết quả sửa
//     const handleUpdate =()=>{ 

//         let duLieuUpdate = {  tenxe: editTenXe,mausac:editMauSac,giaban:editGiaBan,mota:editMoTa,hinh_anh:editImage};
//         // dispatch( addTodo ( duLieuThem )  );

//         dispatch(updateTodoApi({id: editId, data:duLieuUpdate}))
//         .then((result) => {
//             // console.log(result);

//             console.log('Todo update successfully!');
//             setEditTenXe('');
//             setEditMauSac('');
//             setEditGiaBan('');
//             setEditMoTa('');
//             setEditImage('');
//             setEditId(null);
//         })
//         .catch((error) => {
//             console.error('Error update todo:', error);
//         });
//     }

  
//    return (
//     <ScrollView>

   
//        <View style={{backgroundColor:'gray',flex:1}}>
//             <TextInput placeholder="Nhập tên xe" value={tenxe} onChangeText={setTenXe} />
//             <TextInput placeholder="Nhập màu sắc" value={mausac} onChangeText={setMauSac} />
//             <TextInput placeholder="Nhập giá bán" value={giaban} onChangeText={setGiaBan} />
//             <TextInput placeholder="Nhập mô tả" value={mota} onChangeText={setMoTa} />
//             <TextInput placeholder="Nhập link ảnh" value={image} onChangeText={setImage} />
// <View style={{width:100}}>
//     <Button title="Thêm xe" onPress={handleAddTodo} />

// </View>
//            {/* in danh sách todo: */}
//            {
//                listTodo.map(row =>(
//                  <View key={row.id}
                 
//                   style={{margin:10,padding:10, borderColor:'gray',backgroundColor:'orange', borderWidth:3,flexDirection:'row',justifyContent:'space-around',borderRadius:20}}>
//                     {
//                         (editId === row.id)?
//                         (<>
//                                         <TextInput
//                                           value={editTenXe}
//                                           onChangeText={setTenXe}
//                                           onBlur={handleUpdate}
//                                           autoFocus
//                                       />
//                                         <TextInput
//                                           value={editMauSac}
//                                           onChangeText={setMauSac}
//                                           onBlur={handleUpdate}
//                                           autoFocus
//                                       />
//                                        <TextInput
//                                           value={editGiaBan}
//                                           onChangeText={setGiaBan}
//                                           onBlur={handleUpdate}
//                                           autoFocus
//                                       />
//                                        <TextInput
//                                           value={editMoTa}
//                                           onChangeText={setMoTa}
//                                           onBlur={handleUpdate}
//                                           autoFocus
//                                       />
//                                        <TextInput
//                                           value={editImage}
//                                           onChangeText={setEditImage}
//                                           onBlur={handleUpdate}
//                                           autoFocus
//                                       />
//                                       <Button title="Update" onPress={handleUpdate} /> 
//                              </>
//                               )
//                               :
//                               (
//                                 <>

//                                      </>
  
// )
//                     }
//                       <Image 
//                            source={{ uri: row.hinh_anh }} 
//                            style={{ width: 100, height: 100,borderRadius:20 }} 
//                        />
//                        <View>
                   
//                        <Text style={{fontSize:19,color:'red'}}>Tên xe: {row.ten_xe}  </Text>
//                        <Text style={{fontSize:17}}> Màu sắc: {row.mau_sac}   </Text>
//                        <Text style={{fontSize:17}}> Giá bán: {row.gia_ban}  </Text>
              
//                        <Text style={{fontSize:17}}> Mô tả: {row.mo_ta}  </Text>
             
                    
//                         </View> 
//                         <TouchableOpacity style={{marginTop:45}} onPress={()=>handleDeleteTodo(row.id)} >
//      <Image source={require('../images/delete2.png')}/>
// </TouchableOpacity>
// <TouchableOpacity onPress={() => handleEdit(row.id, row.tenxe,row.mausac,row.giaban,row.mota,row.image)}>
//                                           <Text>Edit</Text>
//                                       </TouchableOpacity>
                
                  
                  
                   
                 
                    
//                  </View> 
//                ))
//            }
//        </View>
//        </ScrollView>
//    );
// }
// export default TodoScreen;
import { useDispatch, useSelector } from "react-redux";
import { TextInput, Button, Text, View, Image, TouchableOpacity, ScrollView, Modal, StyleSheet, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { fetchTodos, deleteTodoApi, addTodoAPI, updateTodoApi } from '../redux/actions/todoAction';
import Banner from "../../Banner";

const TodoScreen = () => {
    // Khai báo state để thực hiện thêm
    const [tenxe, setTenXe] = useState('');
    const [mausac, setMauSac] = useState('');
    const [giaban, setGiaBan] = useState('');
    const [mota, setMoTa] = useState('');
    const [image, setImage] = useState('');

    // State dành cho sửa
    const [editTenXe, setEditTenXe] = useState('');
    const [editMauSac, setEditMauSac] = useState('');
    const [editGiaBan, setEditGiaBan] = useState('');
    const [editMoTa, setEditMoTa] = useState('');
    const [editImage, setEditImage] = useState('');
    const [editId, setEditId] = useState(null);

    // State điều khiển Modal
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    // Lấy danh sách dữ liệu từ store của redux
    const listTodo = useSelector(state => state.listTodoStore.listTodo);
    // Lấy đối tượng để điều khiển các action
    const dispatch = useDispatch();

    // Khi vào ứng dụng sẽ gọi action fetchTodos để kéo dữ liệu từ API về store của redux
    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    // Hàm xử lý xóa
    const handleDeleteTodo = async (id) => {
        try {
            await dispatch(deleteTodoApi(id));
            console.log('Todo deleted successfully!');
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    // Hàm xử lý việc thêm
    const handleAddTodo = () => {
        let duLieuThem = { ten_xe: tenxe, mau_sac: mausac, gia_ban: giaban, mo_ta: mota, hinh_anh: image };
        dispatch(addTodoAPI(duLieuThem))
            .then(() => {
                console.log('Todo added successfully!');
                // Reset form
                setTenXe('');
                setMauSac('');
                setGiaBan('');
                setMoTa('');
                setImage('');
            })
            .catch((error) => {
                console.error('Error adding todo:', error);
            });
    };

    // Hàm mở modal để sửa
    const handleEdit = (id, tenxe, mausac, giaban, mota, hinh_anh) => {
        setEditTenXe(tenxe);
        setEditId(id);
        setEditMauSac(mausac);
        setEditGiaBan(giaban);
        setEditMoTa(mota);
        setEditImage(hinh_anh);
        setModalVisible(true);
    };

    // Hàm lưu kết quả sửa
    const handleUpdate = () => {
        let duLieuUpdate = { ten_xe: editTenXe, mau_sac: editMauSac, gia_ban: editGiaBan, mo_ta: editMoTa, hinh_anh: editImage };
        dispatch(updateTodoApi({ id: editId, data: duLieuUpdate }))
            .then(() => {
                console.log('Todo updated successfully!');
                setModalVisible(false);
                setEditTenXe('');
                setEditMauSac('');
                setEditGiaBan('');
                setEditMoTa('');
                setEditImage('');
                setEditId(null);
            })
            .catch((error) => {
                console.error('Error updating todo:', error);
            });
    };

    return (
        <ScrollView style={{ backgroundColor: 'gray', flex: 1 }}>
            <Banner/>
            <View style={{ padding: 10 }}>
                <Pressable style={{width:200,height:40,backgroundColor:'green',alignSelf:'center',borderRadius:10,padding:7}} onPress={() => setAddModalVisible(true)}>
<Text style={{fontSize:17,color:'white',paddingLeft:60}}>Thêm xe</Text>
                </Pressable>
               
            </View>

            {/* In danh sách todo */}
            {listTodo.map(row => (
                <View
                    key={row.id}
                    style={{
                        margin: 10,
                        padding: 10,
                        borderColor: 'gray',
                        backgroundColor: 'orange',
                        borderWidth: 3,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        borderRadius: 20
                    }}
                >
                    <Image
                        source={{ uri: row.hinh_anh }}
                        style={{ width: 100, height: 100, borderRadius: 20 }}
                    />
                    <View>
                        <Text style={{ fontSize: 19, color: 'red' }}>Tên xe: {row.ten_xe}</Text>
                        <Text style={{ fontSize: 17 }}>Màu sắc: {row.mau_sac}</Text>
                        <Text style={{ fontSize: 17 }}>Giá bán: {row.gia_ban}</Text>
                        <Text style={{ fontSize: 17 }}>Mô tả: {row.mo_ta}</Text>
                    </View>
                    <TouchableOpacity style={{ marginTop: 45 }} onPress={() => handleDeleteTodo(row.id)}>
                        <Image source={require('../images/delete2.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleEdit(row.id, row.ten_xe, row.mau_sac, row.gia_ban, row.mo_ta, row.hinh_anh)}>
                        <Image style={{marginTop:40}} source={require('../images/updated.png')} />
                    </TouchableOpacity>
                </View>
            ))}

             {/* Modal thêm */}
             <Modal
                animationType="slide"
                transparent={true}
                visible={addModalVisible}
                onRequestClose={() => {
                    setAddModalVisible(!addModalVisible);
                }}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <TextInput
                            placeholder="Tên xe"
                            value={tenxe}
                            onChangeText={setTenXe}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Màu sắc"
                            value={mausac}
                            onChangeText={setMauSac}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Giá bán"
                            value={giaban}
                            keyboardType="numeric"
                            onChangeText={setGiaBan}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Mô tả"
                            value={mota}
                            onChangeText={setMoTa}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Link ảnh"
                            value={image}
                            onChangeText={setImage}
                            style={styles.input}
                        />
                        <View style={styles.buttonContainer}>
                            <Pressable style={{width:70,height:40,backgroundColor:'red',borderRadius:10,padding:8}} onPress={() => setAddModalVisible(false)}>
                                <Text style={{ fontSize:17,fontWeight:'500'}}>Cancel</Text>
                            </Pressable>
                            <Pressable style={{width:70,height:40,backgroundColor:'blue',borderRadius:10,padding:8}} onPress={handleAddTodo}>
                                <Text style={{ fontSize:17,fontWeight:'500',marginLeft:14}}>Add</Text>
                            </Pressable>
                          
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Modal sửa */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <TextInput
                            placeholder="Tên xe"
                            value={editTenXe}
                            onChangeText={setEditTenXe}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Màu sắc"
                            value={editMauSac}
                            onChangeText={setEditMauSac}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Giá bán"
                            value={editGiaBan}
                            keyboardType="numeric"
                            onChangeText={setEditGiaBan}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Mô tả"
                            value={editMoTa}
                            onChangeText={setEditMoTa}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Link ảnh"
                            value={editImage}
                            onChangeText={setEditImage}
                            style={styles.input}
                        />
                        <View style={styles.buttonContainer}>
                            <Pressable  style={{width:70,height:40,backgroundColor:'red',borderRadius:10,padding:8}} onPress={() => setModalVisible(false)}>
                                <Text style={{ fontSize:17,fontWeight:'500'}}>Cancel</Text>
                            </Pressable >
                            <Pressable style={{width:70,height:40,backgroundColor:'blue',borderRadius:10,padding:8}}  onPress={handleUpdate}>
                                <Text style={{ fontSize:17,fontWeight:'500'}}>Update</Text>
                            </Pressable>
                            
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        padding: 5,
        backgroundColor: 'white'
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
});

export default TodoScreen;