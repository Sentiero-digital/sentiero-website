import {Fragment, FC, useMemo} from "react";
import {Project} from "@/types/project";

export const ArticleListItem: FC<Project> = (article) => {

  const {title, content, urls, thumbnail} = article;
  const relatedUrls = useMemo(() => {
    return (urls ?? [])?.map(url => url.split('|'));
  }, [urls])

  return (
      <article key={article.title}
               className="my-8 md:row lg:my-0">
        <div className="md:col-span-5 lg:col-span-4 ">
          <div className="card aspect-video overflow-hidden relative --no-padding">
            {
              thumbnail?.mimeType?.includes('video/')
                  ? (
                      <video className="object-cover object-center absolute top-0 left-0 w-full h-full"
                             width={400}
                             height={300} loop muted autoPlay>
                        <source src={thumbnail?.url}/>
                      </video>
                  )
                  : (
                      <img src={thumbnail?.url}
                           className="object-cover object-center absolute top-0 left-0 w-full h-full"
                           width={thumbnail.width}
                           height={thumbnail.height}
                           alt={`Preview for ${title}`}
                           loading={'lazy'}
                      />
                  )
            }
          </div>
          <div className={'my-2'}>
            {relatedUrls?.map(([source, href], i, array) => (
                <Fragment key={i}>
                  <a href={href}
                     target="_blank"
                     title={`Check the ${source}`}
                     rel={'noreferrer'}>{source}</a>
                  {(i < (array.length - 1)) && <span> - </span>}
                </Fragment>
            ))}
          </div>
        </div>
        <div className="col-span-8 col-start-1 lg:col-span-7 lg:col-start-5 ">
          <h3 className="text-4xl mb-3 font-light">{article.title}</h3>
          <div className="text-sm w-3/4" dangerouslySetInnerHTML={{__html: content.html}}/>
        </div>
      </article>
  );
}