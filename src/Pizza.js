import React from 'react';

export default function Pizza(props){
    
    const { values, update, submit } = props;

     const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value)
     };
     

     const onSubmit = (evt) => {
        evt.preventDefault();
        submit()
     }
    
    return(
        <form onSubmit={onSubmit}>
            <label>
                Name:
                <input
                type='text'
                name='name'
                value={values.name}
                placeholder='type your name(at least 2 characters)'
                minLength='2'
                onChange={onChange}
                />
            </label>
            <label>
                Size:
                <select name='size' onChange={onChange} value={values.size}>
                    <option value=''>----select size----</option>
                    <option value="small(10')">Small - 10'</option>
                    <option value="medium(12')">Medium - 12'</option>
                    <option value="large(15')">Large - 15'</option>
                    <option value="xlarge(18')">Extra Large - 18'</option>

                </select>
            </label>
            <label>
                Special Instructions:
            <input
                type='text'
                name='instructions'
                value={values.instructions}
                placeholder='special instructions...'
                maxLength='200'
                onChange={onChange}
                />
            </label>

            <div className='order'>
                <button>Order Now!</button>
            </div>

        </form>
    )
}