#!/bin/bash

# ファイル変更を監視してコンテナに同期するスクリプト

CONTAINER_NAME="bouldering-container"

echo "ファイル変更を監視中... (Ctrl+C で停止)"

# ファイル変更を監視
fswatch -o app/ config/ | while read f; do
  echo "ファイルが変更されました: $(date)"
  
  # アプリケーションファイルをコピー
  docker cp app/ $CONTAINER_NAME:/myapp/
  docker cp config/ $CONTAINER_NAME:/myapp/
  
  # JavaScriptファイルを再ビルド
  docker exec $CONTAINER_NAME npm run build
  
  echo "変更を反映しました: $(date)"
done
