import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader } from './ui/card';
import { Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';

const ProjectCard = ({ project }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tetiary dark:bg-secondary/40 xl:bg-work_light xl:bg-[110%] xl:dark:bg-work_dark xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
          <div>
            <button
              onClick={() => handleCopyLink(project.link)}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </button>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">{project.category}</Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
        {copied && <p className="text-green-500">Link copied!</p>}
      </div>
    </Card>
  );
};

export default ProjectCard;
