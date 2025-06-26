export default function Trailer(){
    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#333' ,marginBottom:"20px",}}>Porasy:As três Chamas</h2>
      <video
        width="100%"
        controls
        style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        poster=""
      >
        <source src="src/components/trailer/historia.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    )
}