'use client';

import { useRouter } from 'next/navigation';
import Button from '@mui/joy/Button';
// import Box from '@mui/joy/Box';
import { ButtonGroup } from '@mui/joy';

export default function Header() {
  const router = useRouter();

  return (
    <header className="relative w-full h-20 bg-gradient-to-r from-black via-gray-900 to-gray-700 shadow-xl flex items-center overflow-hidden px-6">
      {/* using material and joy ui the pages are updated */}
      {/* <ButtonGroup variant='plain' color='primary' spacing="0.5rem" size='md' aria-label="outlined button group">
        <Button onClick={() => router.push('/')}> ABOUT </Button>
        <Button onClick={()=>router.push('/')}> PROJECTS </Button>
        <Button onClick={()=>router.push('/')}> CONTACT ME</Button>
      </ButtonGroup> */}
    </header>
  );
}