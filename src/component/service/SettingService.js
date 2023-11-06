import axios from 'axios';

const SettingList = async (values) => {
    try {
        const res = await axios.get('http://localhost:8800/settings', values);
        return res.data.data;
    } catch (err) {
        throw err;
    }
};

const NewSetting = async (values) => {
    try {
        const res = await axios.post('http://localhost:8800/settings', values);
        return res.data.data;
    } catch (err) {
        throw err;
    }
};

const EditSetting = async (values) => {
    try {
        const res = await axios.put('http://localhost:8800/settings/:id', values);
        return res.data.data;
    } catch (err) {
        throw err;
    }
};

export { SettingList, NewSetting, EditSetting};
