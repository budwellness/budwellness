/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SelectedCategories.module.scss';
import { addFilterTagAction, setSearchParamAction, setStartPageAction } from '../../../store/filter/filter.slice';
import convertAbbreviationToQueryString from '../../../helpers/convertAbbreviationToQueryString';

const { log } = console;

function SelectedCategories(props) {
    const { formRef } = props
    const [filterTagsArr, setFilterTagsArr] = useState([]);
    const { filterTags } = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const removeTagHandler = (key) => {
        const updatedFilterTags = { ...filterTags };
        updatedFilterTags[key] = '';
        setFilterTagsArr(
            Object.entries(updatedFilterTags).map((tag, index) => {
                if (tag[1] !== '') {
                    return (
                        <li key={index}>
                            <button
                                type="button"
                                className={styles.clearButton}
                                onClick={(e) => {
                                    log(e.target)
                                    testHandler()
                                }}
                            >
                                {tag[1]} <span className={styles.cross}>&times;</span>
                            </button>
                        </li>
                    )
                }
            })
        )
        dispatch(addFilterTagAction({ [key]: '' }))
        formRef.current.reset();

        const updatedCategories = Object.entries(updatedFilterTags)
        /*

        http://localhost:5173/shop?thc=thc+10%25-20%25&perPage=3&startPage=1

        */
        const filterQueryString = Object.entries(updatedCategories)
            .filter(([key, value]) => {
                if (value[1] === 'all') {
                    return false;
                }
                return value[1] !== '';
            })
            .map(([key, value]) => {
                if (value[0] === 'thc' || value[0] === 'cbd') {
                    return convertAbbreviationToQueryString(`${value[0]}=${value[1]}`)
                }
                // нучно вычленить из value[1] значения thc/cbd и сделать из них 
                // такие который подходят серверу
                // filterQueryString thc=thc 0%-10%
                return `${value[0]}=${value[1]}`
            })
            // .map(([key, value]) => (key === 'categories' ? value : `${key}=${value}`))
            .join('&');
        log('filterQueryString', filterQueryString)
        // filterDataArr.push(`minPrice=${minPrice}&maxPrice=${maxPrice}`);
        // log('filterQueryString', filterQueryString)
        dispatch(setStartPageAction(1))
        dispatch(setSearchParamAction(`${filterQueryString}`))
    }
    useEffect(() => {
        return setFilterTagsArr(
            Object.entries(filterTags).map((tag, index) => {
                if (tag[1] !== '') {
                    return (
                        <li key={index}>
                            <button
                                type="button"
                                className={styles.clearButton}
                                onClick={() => removeTagHandler(tag[0])}
                            >
                                {tag[1]} <span className={styles.cross}>&times;</span>
                            </button>
                        </li>
                    )
                }
            })
        )

    }, [filterTags])

    return (
        <ul className={styles.selectedCategories}>
            {filterTagsArr}
        </ul>
    );
}

export default SelectedCategories;
