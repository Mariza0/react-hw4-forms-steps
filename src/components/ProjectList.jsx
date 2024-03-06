export function ProjectList({ projects }) {

    const photos = projects;
        return (

          <div className="photos"> 
          <div style={{ columnCount: 3, columnGap: '10px' }}>
             {photos.map((photo, index) => (
                <div key={index} className="item-flex" style={{ marginBottom: '10px' }}>
                  <img src={photo.img} alt={photo.category} style={{ width: '100%', height: 'auto' }}/>
                 
                </div>
              ))}
              </div>
          </div> 
              
          );      
        }
  