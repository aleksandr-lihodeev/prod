import React from "react";
import './FilterForm.scss'
import {WrapperHoc} from "../../../shared/helpers";
import {HomeOutlined} from "@ant-design/icons";
import DomainIcon from "@mui/icons-material/Domain";
import HouseIcon from "@mui/icons-material/House";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ApartmentIcon from "@mui/icons-material/Apartment";
import {Button} from "antd";

const FilterForm = () => {
    const optionArr = [
        {name: "Вторичная", icon: <DomainIcon/>},
        {name: "Элитка", icon: <HomeOutlined/>},
        {name: "Новостройки", icon: <MapsHomeWorkIcon/>},
        {name: "Дома и Участки", icon: <HouseIcon/>},
        {name: "Коммерческая", icon: <ApartmentIcon/>},
    ];
    return (
        <WrapperHoc>
            <div className='filters'>
                <div className='filters__btn'>
                    {optionArr.map((el) => {
                        return (
                            <Button
                                key={el.name}
                                className="transparent-button"
                                icon={el.icon}
                            >
                                {el.name}
                            </Button>
                        );
                    })}
                </div>


            </div>
        </WrapperHoc>
    );
};
export default FilterForm;
