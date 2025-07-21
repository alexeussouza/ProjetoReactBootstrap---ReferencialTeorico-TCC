// 1. Definindo a Interface de Props com TypeScript
interface ArticleCardProps {
    title: string;
    author: string;
    summary: string;
    year: number;
    link?: string;
    isFeatured?: boolean; // Prop opcional
}

// 2. Componente usando tipagem TypeScript direta
function ArticleCard({
    title,
    author,
    summary,
    year,
    isFeatured,
    link
}: ArticleCardProps) {

    return (
        <div className="col-md-6 mb-4">
            {/* Card com estilo uniforme para todos os produtos */}
            <div className="card h-100 border">
                {/* Badge para produtos destacados */}
                {isFeatured && (
                    <div className="position-absolute top-0 end-0 p-2">
                        <span className="badge bg-primary">Destaque</span>
                    </div>
                )}

                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text mb-3">{summary}</p>
                    <p className="card-text mb-3">{author}</p>
                    <p className="card-text mb-3">{year}</p>
                    {/* Exibe o botão apenas se o link estiver presente */}
                    {link && (
                        <a href={link} className="btn btn-primary">
                            Artigo Completo...
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;