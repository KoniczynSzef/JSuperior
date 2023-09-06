import React, { FC } from 'react';
import { ScrollArea } from '../ui/scroll-area';

interface ComponentProps {}

const Sidebar: FC<ComponentProps> = () => {
    return (
        <div className="h-screen sticky top-2 hidden lg:block bg-black border-r border-r-slate-600">
            <ScrollArea className="h-screen px-4 py-6 my-4 max-w-sm rounded">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                dolores, inventore cum ullam est optio reiciendis impedit, earum
                vel blanditiis libero! Nobis facilis accusamus numquam enim
                libero magni aperiam facere. Qui totam veniam perferendis nulla
                a, placeat suscipit error quaerat dolor cumque similique at
                officiis! Voluptatem quaerat illo adipisci quas totam aperiam
                voluptates unde sed accusamus harum nemo aspernatur impedit
                corporis, reprehenderit, recusandae reiciendis autem
                repudiandae, alias nobis inventore voluptate et voluptas sunt!
                Minus adipisci quam porro soluta. Porro, nihil distinctio
                accusamus minus minima quia! Distinctio voluptas adipisci ad ex
                iusto soluta praesentium commodi laudantium accusantium
                consectetur aspernatur vitae, similique reiciendis est eveniet
                vero explicabo alias repudiandae reprehenderit. Earum aperiam
                amet quis assumenda eaque quia dolores perspiciatis voluptatum
                rerum delectus veniam reprehenderit molestiae corrupti aliquid
                atque nemo, nihil in incidunt debitis? Similique quia eaque
                consectetur corporis, ex labore consequatur quos in, suscipit
                laudantium nemo doloribus nesciunt enim? Architecto praesentium
                tempore consectetur est magnam inventore at dicta error. Tempora
                distinctio et aperiam expedita esse eos ipsa deserunt dolor,
                facere laboriosam est veritatis cupiditate culpa mollitia
                accusantium id perspiciatis ipsum non quisquam corrupti
                voluptatem enim dignissimos ab animi! Quisquam praesentium
                possimus rem neque, quidem quas in mollitia error fugit eaque
                nulla omnis.
            </ScrollArea>
        </div>
    );
};
export default Sidebar;
