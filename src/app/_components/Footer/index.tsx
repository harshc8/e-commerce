import React from 'react'
import Link from 'next/link'
import FooterComponent from './FooterComponent'
import { Footer } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
// import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
// import { Gutter } from '../Gutter'
// import { CMSLink } from '../Link'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <>
      <FooterComponent footer={footer} />
    </>
  )
}
