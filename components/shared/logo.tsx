import Link from 'next/link'
import React from 'react'

const Logo = () => {
	return (
		<Link href={'/'}>
			<div className='flex items-center gap-1'>Logo</div>
		</Link>
	)
}

export default Logo
