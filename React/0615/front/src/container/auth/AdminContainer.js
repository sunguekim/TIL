import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { list } from '../../modules/auth'
import Admin from '../../components/auth/Admin';

const AdminContainer = ()=>{
    const dispatch = useDispatch()
    const { info,loading } = useSelector(({ auth, loading }) => ({
        loading: ['auth/LIST'],
        info: auth.list
    }))
    

    useEffect(() => {
        console.log('adimin call')
        dispatch(list())
    }, [dispatch])

    return (

        <div>
            <Admin
            info={info}
            loading={loading}
            />
        </div>
    )
}

export default AdminContainer;