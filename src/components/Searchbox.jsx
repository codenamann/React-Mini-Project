import { Search } from 'lucide-react';
import './Searchbox.css';
import Button from './ui/Button';
import Input from './ui/Input';


export default function Searchbox({onSubmit, ...props }) {

  return (
    <div className="flex items-center gap-2">
        <Input placeholder='Search' {...props} />
        <Button className='rounded-full' onClick={onSubmit}><Search /></Button>
    </div>
  );
}