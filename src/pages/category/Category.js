import React from 'react'
import { AdminLayout } from '../../components/layout/AdminLayout'
import CategoryForm from '../../components/category-components/CategoryForm'
import CategoryDisplay from '../../components/category-components/CategoryDisplay'
import { Header } from '../../components/layout/Header'

const Category = () => {
  return (
    <AdminLayout>
      <h3 className='mt-4'>Category Mgmt</h3>
      <hr />
        
        <CategoryForm />
        <CategoryDisplay />
    </AdminLayout>
  )
}

export default Category
