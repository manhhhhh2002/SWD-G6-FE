import React, { useState, useEffect } from 'react';
import { EditSetting } from '../../service/SettingService';
import { useParams ,useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

function UpdateSetting() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [newSettingData, setNewSettingData] = useState({
        setting_id: id,
        setting_name: '',
        setting_type: ''
    });

    const [setting, setSetting] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await EditSetting({
                    id: newSettingData.setting_id,
                    setting_name: newSettingData.setting_name,
                    setting_type: newSettingData.setting_type
                });
                setSetting(res);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, [newSettingData]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await EditSetting(newSettingData);
            setSetting(res);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Edit setting successfully!!',
                showConfirmButton: false,
                width: 500,
                heightAuto: 100,
                timer: 1500
            });
            navigate('/admin');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Edit Setting</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <div>
                        <label htmlFor="setting_id">Setting ID:</label>
                        <input
                            type="text"
                            id="setting_id"
                            name="setting_id"
                            value={newSettingData.setting_id}
                            onChange={(e) => setNewSettingData({ ...newSettingData, setting_id: e.target.value })}
                            style={{ width: '100%', marginRight: '30rem' }}
                            readOnly 
                        />
                    </div>

                </div>
                <div>
                    <label htmlFor="setting_name">Setting Name:</label>
                    <input
                        type="text"
                        id="setting_name"
                        name="setting_name"
                        value={newSettingData.setting_name}
                        onChange={(e) => setNewSettingData({ ...newSettingData, setting_name: e.target.value })}
                        style={{ width: '100%', marginRight: '30rem' }}
                    />
                </div>
                <div>
                    <label htmlFor="setting_type">Setting Type:</label>
                    <input
                        type="text"
                        id="setting_type"
                        name="setting_type"
                        value={newSettingData.setting_type}
                        onChange={(e) => setNewSettingData({ ...newSettingData, setting_type: e.target.value })}
                        style={{ width: '100%', marginRight: '30rem' }}
                    />
                </div>
                <button type="submit" className='addnew'>Update</button>
            </form>
        </div>
    );
}

export default UpdateSetting;
